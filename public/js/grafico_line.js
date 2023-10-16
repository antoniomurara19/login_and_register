let ctx = document.getElementById('grafico_linha')

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
        data: [65, 59, 80, 81, 56, 55, 40, 25, 38, 52, 78, 82],
        label: 'Faturamento em Milhões de R$',
        fill: false,
        backgroundColor: 'darkgreen',
        borderColor: '#ffff00',
        borderWidth: 3,
        tension: 0.2
    }],
}

const config = {
    type: 'line',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'yellow',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)
