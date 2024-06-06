const express = require('express');
const router = express.Router();
const paysController = require('../Controllers/paysController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', paysController.getPays);
router.get('/:id', paysController.getPaysById); // GET by ID
router.post('/', paysController.createPays); // POST/CREATE
router.put('/:id', paysController.updatePays); // UPDATE by ID
router.delete('/:id', paysController.deletePays); //DELETE by ID

module.exports = router;