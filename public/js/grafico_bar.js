let ctx = document.getElementById('grafico_barras')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 26
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

const data = {
    labels,
    datasets: [{
        data: [30, 25, 48, 37, 55, 68, 72, 43, 69, 85, 90, 52],
        label: 'Vendas em Milhões de R$',
        backgroundColor: 'darkblue',
        borderColor: '#fff',
        borderWidth: 3
    }],
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
      },
}

const graph = new Chart(ctx, config)

