const express = require('express');
const router = express.Router();
const typeController = require('../Controllers/typeController');

// Définir les routes pour les types
// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', typeController.getTypes);
router.get('/:id', typeController.getTypeById);
router.post('/', typeController.createType);
router.put('/:id', typeController.updateType);
router.delete('/:id', typeController.deleteType);

module.exports = router;
