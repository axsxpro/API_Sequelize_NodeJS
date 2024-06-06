const express = require('express');
const router = express.Router();
const venteController = require('../Controllers/venteController');

// Définir les routes pour les types
// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', venteController.getVentes);
router.get('/:year/:num/:id', venteController.getVenteById);
router.post('/', venteController.createVente);
router.delete('/:year/:num/:id', venteController.deleteVente);

module.exports = router;
