const endpoint = 'http://localhost:3000/grafic'

let qntd_array = []
let nome_array = []

fetch(endpoint,{
    method: 'GET',
    headers: {
        'Content-Type':'application/json'
    }
})
// .then(resposta => console.log(resposta))
.then(resposta => resposta.json())
.then(dados => {
    console.log(dados)
    dados.forEach(valor => {
        qntd_array.push(valor.qtde_produto)
        nome_array.push(valor.nome)
    });
})
console.log(qntd_array)
console.log(nome_array)

let grafic_bar = document.getElementById('grafic_bar')

grafic_bar.addEventListener('click',()=>{

    
    let ctx = document.getElementById('grafico_bar')

    // Configuração do gráfico 

    // Chart.defaults.backgroundColor = '#abd8f5'
    Chart.defaults.borderColor = '#fff'
    Chart.defaults.color = '#fff'
    Chart.defaults.font.size = 26
    Chart.defaults.font.family = 'sans-serif'
    Chart.defaults.font.weight = 'bold'


    // https://www.chartjs.org/docs/latest/general/colors.html

    const labels = nome_array

    const data = {
        labels,
        datasets: [{
            data: qntd_array,
            label: 'Produtos',
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

})
