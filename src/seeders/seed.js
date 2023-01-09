const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');


const users = [
    {
        username:'emunoz',
        email: 'javicho16_mu@hotmail.com',
        password: '1234'
    },
    {
        username:'kaguirre',
        email: 'kaguirre@hotmail.com',
        password: '1234'
    },
    {
        username:'bhuera',
        email: 'bhuera@hotmail.com',
        password: '1234'
    }
];

const todos = [
    {
        title:' Tarea 1',
        description: ' shalala shalala',
        userId: 1
    },
    {
        title:' Tarea 2',
        description: ' shalala shalala',
        userId: 1
    },
    {
        title:' Tarea Imposible',
        userId: 2
    },
    {
        title:'Dormir',
        description: 'node no me deja',
        userId: 3
    },
];

//const categories = [];

//const TodosCategories = [];

db.sync({force: true})

.then(() => {
    console.log('Iniciando con el sembrario malicioso');

        users.forEach((user) => Users.create(user));


        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        },100);

})
.catch(error => console.log(error));