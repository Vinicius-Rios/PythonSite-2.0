function Cons1(d, y, z){
  f = z
  document.getElementById('l1').innerHTML = f[1]
  document.getElementById('l2').innerHTML = f[2]
  document.getElementById('l3').innerHTML = f[3]+f[4]+f[5]

  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("saúde1")){
  element.id = "construção1"
  }
  if (element = document.getElementById("transformação1")){
  element.id = "construção1"
  }

  new Chart("construção1", {
    type: 'pie',
    data: {
      labels: ["Construção", "Outros Setores"],
      datasets: [{
        label: "Acidentes",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ACIDENTES DE TRABALHO NA CONSTRUÇÃO EM 2018 EM RELAÇÃO AO TOTAL'
      }
    }
});
}

function Cons2(d, y, g, h , i, j) {
  c1 = d, c2 = y, c3 = g, c4 = h, c5 = i, c6 = j
  var element
  if (element = document.getElementById("saúde2")){
  element.id = "construção2"
  }
  if (element = document.getElementById("transformação2")){
  element.id = "construção2"
  }
  new Chart("construção2", {
    type: 'bar',
    data: {
        labels: ['2016', '2017', '2018', '2016', '2017', '2018'],
        datasets: [{
            label: 'N° de acidentes comparados a outros setores',
            data: [c1, c2, c3, c4, c5, c6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function Sau1(d, y, z){
  f = z
  document.getElementById('l1').innerHTML = f[1]
  document.getElementById('l2').innerHTML = f[2]
  document.getElementById('l3').innerHTML = f[3]

  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("construção1")){
  element.id = "saúde1"
  }
  if (element = document.getElementById("transformação1")){
  element.id = "saúde1"
  }
  new Chart('saúde1', {
    type: 'pie',
    data: {
      labels: ["Saúde", "Outros Setores"],
      datasets: [{
        label: "Acidentes",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ACIDENTES DE TRABALHO NA SAÚDE EM 2018 EM RELAÇÃO AO TOTAL'
      }
    }
});
}  
 
function Sau2(a, b, c, d , e, f) {
  c1 = a, c2 = b, c3 = c, c4 = d, c5 = e, c6 = f
  var element
  if (element = document.getElementById("construção2")){
  element.id = "saúde2"
  }
  if (element = document.getElementById("transformação2")){
  element.id = "saúde2"
  }

  new Chart('saúde2', {
    type: 'bar',
    data: {
        labels: ['2016', '2017', '2018', '2016', '2017', '2018'],
        datasets: [{
            label: 'N° de acidentes comparados a outros setores',
            data: [c1, c2, c3, c4, c5, c6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function Tra1(d, y, z){
  f = z
  document.getElementById('l1').innerHTML = f[1]
  document.getElementById('l2').innerHTML = f[2]
  document.getElementById('l3').innerHTML = f[3]

  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("saúde1")){
  element.id = "transformação1"
  }
  if (element = document.getElementById("construção1")){
  element.id = "transformação1"
  }

  new Chart("transformação1", {
    type: 'pie',
    data: {
      labels: ["Transformação", "Outros Setores"],
      datasets: [{
        label: "Acidentes",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ACIDENTES DE TRABALHO NA TRANSFORMAÇÃO EM 2018 EM RELAÇÃO AO TOTAL'
      }
    }
});
}

function Tra2(a, b, c, d , e, f) {
  c1 = a, c2 = b, c3 = c, c4 = d, c5 = e, c6 = f
  var element
  if (element = document.getElementById("saúde2")){
  element.id = "transformação2"
  }
  if (element = document.getElementById("construção2")){
  element.id = "transformação2"
  }

  new Chart("transformação2", {
    type: 'bar',
    data: {
        labels: ['2016', '2017', '2018', '2016', '2017', '2018'],
        datasets: [{
            label: 'N° de acidentes comparados a outros setores',
            data: [c1, c2, c3, c4, c5, c6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function Cons3(d, y){
  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("saúde3")){
  element.id = "construção3"
  }
  if (element = document.getElementById("transformação3")){
  element.id = "construção3"
  }

  new Chart("construção3", {
    type: 'pie',
    data: {
      labels: ["Construção", "Outros Setores"],
      datasets: [{
        label: "N° de Vínculos",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'NÚMERO DE VÍNCULOS POR CNAE 2.0'
      }
    }
});
}

function Sau3(d, y){
  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("construção3")){
  element.id = "saúde3"
  }
  if (element = document.getElementById("transformação3")){
  element.id = "saúde3"
  }

  new Chart("saúde3", {
    type: 'pie',
    data: {
      labels: ["Saúde", "Outros Setores"],
      datasets: [{
        label: "N° de Vínculos",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'NÚMERO DE VÍNCULOS POR CNAE 2.0'
      }
    }
});
}
function Tra3(d, y){
  c1 = d
  c2 = y
  var element
  if (element = document.getElementById("saúde3")){
  element.id = "transformação3"
  }
  if (element = document.getElementById("construção3")){
  element.id = "transformação3"
  }
  new Chart("transformação3", {
    type: 'pie',
    data: {
      labels: ["Transformação", "Outros Setores"],
      datasets: [{
        label: "N° de Vínculos",
        backgroundColor: ["#3e95cd", "#6495b0"],
        data: [c1, c2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'NÚMERO DE VÍNCULOS POR CNAE 2.0'
      }
    }
});
}  

$( "#Construcao" ).click(function(){
  getC();
});
 
$( "#Transformacao" ).click(function(){
  getT();
});

$( "#Saude" ).click(function(){
  getS();
});