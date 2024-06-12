const User = require('../Models/User');
const {getUserInclusion} = require('../Models/utils/userInclusion');


// Récupérer tous les utilisateurs
async function getUsers(req, res) {
    try {
        const users = await User.findAll(getUserInclusion());
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Récupérer un utilisateur par son ID
async function getUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.id, getUserInclusion());
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


//fonction POST dans authController


// Mettre à jour un utilisateur
async function updateUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Supprimer un utilisateur
async function deleteUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
