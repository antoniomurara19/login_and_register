const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente',{
    
        nome: {
            type: DataTypes.STRING(30)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        senha: {
            type: DataTypes.STRING(100)
        },
        idade: {
            type: DataTypes.INTEGER
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    
    // Cliente.sync({force:true})

    module.exports = Cliente
