const express = require('express');
const router = express.Router();
const couleurController = require('../Controllers/couleurController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', couleurController.getCouleurs);
router.get('/:id', couleurController.getCouleurById); // GET by ID
router.post('/', couleurController.createCouleur); // POST/CREATE
router.put('/:id', couleurController.updateCouleur); // UPDATE by ID
router.delete('/:id', couleurController.deleteCouleur); //DELETE by ID

module.exports = router;
