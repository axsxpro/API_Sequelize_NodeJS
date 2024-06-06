const express = require('express');
const router = express.Router();
const continentController = require('../Controllers/continentController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', continentController.getContinents);  // GET ALL
router.get('/:id', continentController.getContinentById); // GET by ID
router.post('/', continentController.createContinent); // POST/CREATE
router.put('/:id', continentController.updateContinent); // UPDATE by ID
router.delete('/:id', continentController.deleteContinent); //DELETE by ID

module.exports = router;

