const Sequelize= require('sequelize')
const sequelize= require('../util/database')

const Players= sequelize.define('players',{
    
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
        
    },
    url:{
        type:Sequelize.STRING,
        allowNull:false
    },
    birthplace:{
        type:Sequelize.STRING,
        allowNull:false,    
    },
    career:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    matches:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    score:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    fifties:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    centuries:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    wicket:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    average:{
        type:Sequelize.DOUBLE,
        allowNull:false,
    }
})
module.exports= Players;