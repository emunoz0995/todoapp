const TodosService = require('../services/todo.services');

const getAllTodos = async (req , res) =>{
    try {
        const result = await TodosService.getAll();
        res.status(200).json(result);
     } catch (error) {
        res.status(400).json(error.message);
     }
}

const getTodoById = async (req,res) => {
    try {
        const { id } = req.params;
        const result = await TodosService.getById(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json(error.message);
      }
}

const getTaskWithCategory = async ( req, res) => {
    try {
        const { id } = req.params;
        const result = await TodosService.getWithCategory(id)
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message); 
    }
}

const createTodo = async ( req, res) =>{
    try {
        const todo = req.body;
        const result = await TodosService.create(todo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}

const updateTodo = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field  = req.body;
        const result = await TodosService.update(id ,field);
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);   
    }
}

const deleteTodo = async( req, res) =>{
    try {
        const { id } = req.params;
        const result =  await TodosService.delete(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    getTaskWithCategory,
    updateTodo,
    createTodo,
    deleteTodo,
};