const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bcrypt = require('bcrypt')

const conn = require('./db/conn')
const Cliente = require('./models/Cliente')
const Produto = require('./models/Produto')

const PORT = 3000
const hostname = 'localhost'

let log = false
/* ------------ Configuração express --------------- */
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
/* ------------ Configuração express-handlebars ---- */
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine())
/* ------------------------------------------------- */

app.post('/login', async (req,res)=>{
    const email = req.body.email
    const senha = req.body.senha

    const msg1 = 'Usuário não encontrado'
    const msg2 = 'Usuário encontrado'

    const pesquisa = await Cliente.findOne({raw : true, where : {email:email,senha:senha}})
    
    console.log(pesquisa)
    
    if(pesquisa == null){
        console.log(`${msg1}`)
        res.status(200).redirect('/')
    }else if((pesquisa.email == email) && (pesquisa.senha == senha)){
        console.log(`${msg2}`)
        log = true
        res.render('home', {log})
    }else{
        console.log(`${msg1}`)
        res.status(200).redirect('/')
    }

    console.log(`${email} e ${senha}`)
})

app.post('/cadastro', async (req,res)=>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const idade = Number(req.body.idade)
    
    const msg_error = 'Não foi possível cadastrar'

    if((typeof nome !== 'string')&&(typeof email !== 'string')&&(typeof senha !== 'string')&&(typeof idade === 'number')){
        console.log(msg_error)
    }else if((typeof nome === 'string')&&(typeof email === 'string')&&(typeof senha === 'string')&&(typeof idade === 'number')){
        await Cliente.create({email,senha,idade})
        res.status(200).redirect('/')
    }
    console.log(pesquisa)
})

app.get('/listar', async (req,res)=>{
    const dados = await Cliente.findAll({raw:true})
    res.render('listar',{log,dados:dados})
    console.log(dados)
})

app.get('/grafic', async (req,res)=>{
    const pesq = await Produto.findAll({raw:true})
    console.log(pesq)
    res.status(200).json(pesq)
})

app.get('/cadastro', (req,res)=>{
    res.render('cadastro', {log})
})

app.get('/grafico', (req,res)=>{
    res.render('grafico', {log})
})

app.get('/login', (req,res)=>{
    res.render('login', {log})
})

app.get('/logout', (req,res)=>{
    log = false
    res.render('home', {log})
})

app.get('/', (req,res)=>{
    res.render('home', {log})
})

/* ------------------------------------------------- */
conn.sync().then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor Rodando em ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Erro de conexão com o banco de dados!')
})