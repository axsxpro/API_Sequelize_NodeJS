const jwt = require('jsonwebtoken'); // Importer jsonwebtoken pour gérer les tokens JWT
require('dotenv').config(); // Charger les variables d'environnement

// Middleware pour vérifier le token JWT
const verifyToken = (req, res, next) => {

    const authHeader = req.header('Authorization'); // Extraire l'en-tête Authorization
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = token.slice(7, authHeader.length); // Extraire le token après "Bearer "
    }

    // Vérifier si le token est présent
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    // Vérifier et décoder le token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token.' });
        }

        // Si le token est valide, ajouter les informations utilisateur à la requête
        req.userId = decoded.id_user;
        req.userRole = decoded.role;
        next();
    });
};

module.exports = verifyToken;
