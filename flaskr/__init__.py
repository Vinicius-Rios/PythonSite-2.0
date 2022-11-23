from flask import Flask, render_template, request, current_app, g, json
from jinja2 import Environment
from pandas import DataFrame
import pandas as pd
import sqlite3
import os

def read_file(filename, charset='utf-8'):
    with open(filename, 'r') as f:
        return f.read().decode(charset)

def write_file(filename, contents, charset='utf-8'):
    with open(filename, 'w') as f:
        f.write(contents.encode(charset))

def StrLines(row):
    a = list(row)
    b = '\n'.join(str(n) for n in a)
    return b

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect('D:\Projeto\SQLite\db\DATABASE.db')
    return db

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass


    @app.route('/')
    def home():
        return render_template("index.html")

    @app.route('/areas', methods=['GET', 'POST'])
    def areas():
        da = 1
        if da == 1:
            cur = get_db().cursor()
            cur.execute('SELECT * FROM formulario')
            rows1 = cur.fetchall()[0]
            rows1 = StrLines(rows1)
            cur.execute('SELECT * FROM formulario')
            rows2 = cur.fetchall()[1]
            rows2 = StrLines(rows2)
            cur.execute('SELECT * FROM formulario')
            rows3 = cur.fetchall()[2]
            rows3 = StrLines(rows3)

            cons = cur.execute('SELECT * FROM Construção').fetchall()
            sau = cur.execute('SELECT * FROM Saúde').fetchall()
            tra = cur.execute('SELECT * FROM Transformação').fetchall()
            a_v = cur.execute('SELECT * FROM Areas_Vinculos').fetchall()

            table = pd.read_sql_query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE 'formulario'", get_db())
            table_form = pd.read_sql_query("SELECT * FROM formulario", get_db())
            id_Form = table_form.index.max()

            id_Tables = table.index.max()
            cur.close()
            return render_template("areas.html", f1=rows1, f2=rows2, f3=rows3, id_Tables=id_Tables, id_Form=id_Form, teste=da, tab_sau=sau, tab_tra=tra, tab_cons=cons, a_v=a_v)
        else:
            return render_template("areas.html", teste=da)
    
    @app.route('/about')
    def about():
        return render_template("about.html")

    @app.route('/form', methods=['GET', 'POST'])
    def form():
        if request.method == "POST":
            aut = request.form['author']
            intr = request.form['intro']
            cont = request.form['content']
            pla = request.files['planilha']

            filename = request.files['planilha'].filename

            dados = (aut, intr, cont)
            filename = filename[:-4]

            df = pd.read_csv(pla, na_filter=False, sep=';', encoding='latin-1')
            df.drop(df.filter(regex="Unname"),axis=1, inplace=True)

            cur = get_db().cursor()
            df.to_sql(filename, get_db())
            cur.close()
            
            cur = get_db().cursor()
            sql = " INSERT INTO formulario (título, introdução, conteúdo) VALUES (?, ?, ?) "
            dados = (aut, intr, cont)

            cur.execute(sql, dados)
            get_db().commit()
            cur.close()
            return render_template("form.html")
        else:
            return render_template("form.html")

    from . import db
    db.init_app(app)

    return app
    
if __name__ == "__main__":
    app.run(debug=True)