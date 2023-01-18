const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos-categories.model');


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

const categories = [
    {name: 'personal', userId: 1},
    {name: 'educacion', userId: 1},
    {name: 'salud', userId: 1},
    {name: 'trabajo', userId: 1},
    {name: 'hogar', userId: 1},
    {name: 'cocina', userId: 3},
    {name: 'deporte', userId: 3},
    {name: 'ocio', userId: 3},
    {name: 'financiero', userId: 3},
    {name: 'entretenimiento', userId: 3},
  ];
  

const todosCategories = [
   
        {categoryId: 1 , todoId: 1},
        {categoryId: 2 , todoId: 1},
        {categoryId: 4 , todoId: 1},
        {categoryId: 6 , todoId: 2},
        {categoryId: 8 , todoId: 2},
        {categoryId: 10 , todoId: 2},
    
];

db.sync({force: true})

.then(() => {
    console.log('Iniciando con el sembrario malicioso');

        users.forEach((user) => Users.create(user));


        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        },100);

        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 200);

        setTimeout(() => {
            todosCategories.forEach((tc) => TodosCategories.create(tc));
        }, 300);

})
.catch(error => console.log(error));