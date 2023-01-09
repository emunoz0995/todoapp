// vamos a importar todos los modelos

const Categories = require('./categories.model');
const Users = require ('./users.model');
const Todos = require ('./todos.model');
const TodosCategories = require ('./todos-categories.model')


const initModels = () => {
    // vamos a crear las relaciones
    // hasOne -> indicar de uno a uno
    // hasMany -> indicar de uno a muchos
    // belongsTo -> pertenece a
    Todos.belongsTo(Users, {as:'author', foreignKey: 'user_id'});
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});
   
    TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'});
    Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'});
   
    TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});
};

module.exports = initModels;