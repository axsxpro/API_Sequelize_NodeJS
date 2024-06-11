const jwt = require('jsonwebtoken'); // Importation du module jsonwebtoken pour gérer les tokens JWT
const bcrypt = require('bcrypt');// Importation du module bcrypt pour le hachage des mots de passe
const User = require('../Models/User');// Importation du modèle User
const Role = require('../Models/Role');// Importation du modèle Role
require('dotenv').config(); // Charger les variables d'environnement


// fonction pour l'inscription des utilisateurs
const register = async (req, res) => {

    //destructuration
    const { username, password, role } = req.body; // Extraction des données du corps de la requête

    try {

        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe avec un sel de 10
        const userRole = await Role.findOne({ where: { nom_role: role } }); // Recherche du rôle dans la base de données

        // Vérification si le rôle existe
        if (!userRole) {
            return res.status(400).json({ message: 'Invalid role' }); // Retourne une erreur si le rôle est invalide
        }

        // Création d'un nouvel utilisateur avec le mot de passe haché et le rôle correspondant
        const newUser = await User.create({
            username,
            password: hashedPassword,
            id_role: userRole.id_role
        });

        res.status(201).json({ message: 'User created successfully' }); // Retourne un succès si l'utilisateur est créé
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error }); // Retourne une erreur si la création échoue
    }
};


// fonction  pour la connexion des utilisateurs
const login = async (req, res) => {

    const { username, password } = req.body; // Extraction des données du corps de la requête

    try {
        const user = await User.findOne({ where: { username }, include: Role }); // Recherche de l'utilisateur avec le rôle associé

        // Vérification si l'utilisateur existe
        if (!user) {
            return res.status(400).json({ message: 'User not found' }); // Retourne une erreur si l'utilisateur n'est pas trouvé
        }

        const passwordIsValid = await bcrypt.compare(password, user.password); // Comparaison du mot de passe avec le mot de passe haché

        // Vérification si le mot de passe est valide
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Invalid password' }); // Retourne une erreur si le mot de passe est invalide
        }

        // Création du token JWT avec l'ID utilisateur et le rôle, expiraion de 24 heures
        const token = jwt.sign(
            
            { id_user: user.id_user, role: user.Role.nom_role }, 
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_EXPIRATION}
            
        );
        
        res.header('Authorization', 'Bearer ' + token); // Ajouter l'en-tête Authorization avec le token
        res.status(200).json({ auth: true, token }); // Retourne un succès avec le token JWT

    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error }); // Retourne une erreur si la connexion échoue
    }
};


module.exports = { 
    register, 
    login 
}; 
