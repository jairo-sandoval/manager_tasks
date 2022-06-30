const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const db = new Sequelize({
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE,
    logging: false, 
})

module.exports = { db }