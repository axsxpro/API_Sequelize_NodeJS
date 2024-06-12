const jwt = require('jsonwebtoken'); // Importer jsonwebtoken pour gérer les tokens JWT
require('dotenv').config(); // Charger les variables d'environnement

// Middleware pour vérifier le token JWT
const verifyToken = (req, res, next) => {

    try {
        const authHeader = req.header('Authorization'); // Extraire l'en-tête Authorization
        let token;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.slice(7, authHeader.length); // Extraire le token après "Bearer "
        }

        // Vérifier si le token est présent
        if (!token) {
            return res.status(403).json({ message: 'No token provided.' });
        }

        // jwt.verify() décode le token JWT et vérifie sa signature
        // (err, decoded): fonction de rappel (callback) qui est exécutée une fois la vérification terminée
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            // Si une erreur se produit lors de la vérification du token, cela indique généralement une invalidité du token, par exemple, une signature incorrecte ou un token expiré.
            if (err) {
                return res.status(500).json({ message: 'Failed to authenticate token.' });
            }

            // Si le token est valide, ajouter les informations utilisateur à la requête
            req.userId = decoded.id_user;
            req.userRole = decoded.role;

            //la fonction 'next()' est appelée pour passer au gestionnaire de route suivant.
            // Cela permet de poursuivre le flux de traitement de la requête.
            next();
        });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.', error: error.message });
    }
};

module.exports = verifyToken;

