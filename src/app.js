const express = require('express');
const db = require ('./utils/database');
const initModels = require ('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');

//crear una instacia de express
const app = express();

app.use(express.json());

const PORT = 8000;

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

// rutas de nuestros endpoints (los vamos a llamar ep),
//todas la s consultas de usuarios localhost:8000/users
//todas la s consultas de tareas localhost:8000/todos

app.get('/users', async (req, res) => {
  try {
    // vamos a obtener la consulta de todos los usaurios
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener usuario segun su id

app.get('/users/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);        
    } catch (error) {
        console.log(error);     
    }
});

// obtenre un usuario por username

app.get('/users/username/:username', async (req, res) => {
    try {
        
        const { username } = req.params;
        const result = await Users.findOne({where: {username}});
        res.status(200).json(result);        
    } catch (error) {
        console.log(error);     
    }
});

// crear usuario

app.post('/users', async (req, res) =>{
try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    console.log(error);
}
});

//actualizar usuario

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, {
            where: {id},
        });
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);     
    }
});

// eliminar usuario --> id

app.delete('/users/:id', async (req, res) =>{
try {
    const { id } = req.params;
    const result =  await Users.destroy( {
        where: {id}
    });
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message);
}
});


// crearndo endpoints para todos

app.get('/todos', async (req, res) => {
 try {
    const result = await Todos.findAll();
    res.status(200).json(result);
 } catch (error) {
    res.status(400).json(error.message);
 }
});

app.get('/todos/:id', async ( req, res) =>{
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post('/todos', async ( req, res) => {
    try {
        const todo = req.body;
        const result = await Todos.create(todo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});


app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { isComplete }  = req.body;
        const result = await Todos.update({isComplete}, {
            where: {id},
        });
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);   
    }
});

app.delete('/todos/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const result =  await Todos.destroy( {
            where: {id}
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
    });




app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});