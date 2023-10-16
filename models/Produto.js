const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const Cliente = require('./Cliente')
const Produto = db.define('produto',{
    nome: {
        type: DataTypes.STRING(100)
    },
    qtde_produto: {
        type: DataTypes.INTEGER
    },
    preco: {
        type: DataTypes.FLOAT
    }
},{
    createdAt: false,
    updatedAt: false
})

Cliente.hasOne(Produto)
Produto.belongsTo(Cliente)

// Produto.sync({force:true})

module.exports = Produto