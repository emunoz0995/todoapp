const express = require('express');
const db = require ('./utils/database');
const initModels = require ('./models/init.model');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todo.routes');
const authRoutes = require('./routes/auth.routes');

require('dotenv').config();


const cors = require('cors');

//crear una instacia de express
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

//probando la conexion bd

db.authenticate()
.then(() => console.log('Autenticacion exitosa'))
.catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({force: false}) //devuelve una promesa
 .then(() => console.log('Base de datos sincronizada'))
 .catch((error) => console.log(error));

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Bienvenidos al servidor'});
});

app.use('/api/v1', userRoutes);

app.use('/api/v1', todoRoutes);

app.use('/api/v1', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});