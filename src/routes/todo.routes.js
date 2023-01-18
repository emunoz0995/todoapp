const { Router } = require('express');

const { 
    getAllTodos,
    getTodoById,
    getTaskWithCategory,
    updateTodo,
    createTodo,
    deleteTodo,
} = require ('../controlers/todo.controler');

const authMiddleware = require('../middlwares/auth.middleware');
const router = Router();

router.get('/todos', authMiddleware, getAllTodos);
router.get('/todos/:id', authMiddleware, getTodoById);
router.get('/todos/:id/categories', authMiddleware, getTaskWithCategory);
router.post('/todos', authMiddleware, createTodo);
router.put('/todos/:id', authMiddleware, updateTodo);
router.delete('/todos/:id', authMiddleware, deleteTodo)

module.exports = router;