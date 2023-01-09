const { Sequelize } = require('sequelize');

//crear una instancia con parametros  de configuracion de nuestra bd
// un objeto de configuracion --> credenciales de mi bd
const db = new Sequelize({
 database: 'todoapp',
 username: 'postgres',
 host: 'localhost',
 port: '5432',
 password: 'root',
 dialect: 'postgres' // la base que estamos usando
});

module.exports = db;

