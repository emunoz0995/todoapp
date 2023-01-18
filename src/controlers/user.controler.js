const UserService = require('../services/user.services');

const getAllUsers = async (req, res) => {
    try {
        // vamos a obtener la consulta de todos los usaurios
        const result = await UserService.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserWithTasks = async ( req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.getWithTask(id);
        res.json(result);
        } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserWithCategories = async ( req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.getWithCategories(id);
        res.json(result);
        } catch (error) {
        res.status(400).json(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await UserService.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await UserService.update(field, {
            where: { id },
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.delete({
            where: { id }
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithTasks,
    getUserWithCategories,
    createUser,
    updateUser,
    deleteUser,
};

