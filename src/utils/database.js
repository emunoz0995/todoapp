const { Sequelize } = require('sequelize');
require('dotenv').config()

//crear una instancia con parametros  de configuracion de nuestra bd
// un objeto de configuracion --> credenciales de mi bd
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    logging: false, // la base que estamos usando
});

module.exports = db;

