const Sequelize = require('sequelize')

const sequelize=new Sequelize('cricket','root','password',{
    dialect:'mysql',
    host: 'localhost'
})



module.exports= sequelize;