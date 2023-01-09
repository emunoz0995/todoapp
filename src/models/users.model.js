// instancia para conexion a bd
const db = require('../utils/database');

// tipos de datos de sequelize

const { DataTypes } = require('sequelize');

//definir el modelo de usuarios
// los modelos se difinen con mayusculas
// parametros
// nombre tabla
// atributos de tabla (objeto)

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
});

module.exports = Users;