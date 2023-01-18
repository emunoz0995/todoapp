const { Router } = require('express');
const { 
    getAllUsers,
    getUserById,
    getUserWithTasks,
    getUserWithCategories,
    createUser,
    updateUser,
    deleteUser,
} = require('../controlers/user.controler');
const authMiddleware = require('../middlwares/auth.middleware');

const router = Router();

// router.get("/users", getAllUsers);

// router.get("/users/:id", getUserById);

//obtener a u usuario con sus tareas

router.get('/users/:id/todos', authMiddleware, getUserWithTasks);

router.get('/users/:id/categories',authMiddleware, getUserWithCategories);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);


module.exports = router;