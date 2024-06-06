const express = require('express');
const router = express.Router();
const fabricantController = require('../Controllers/fabricantController');

// Définir les routes pour les fabricants
// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', fabricantController.getFabricants);
router.get('/:id', fabricantController.getFabricantById);
router.post('/', fabricantController.createFabricant);
router.put('/:id', fabricantController.updateFabricant);
router.delete('/:id', fabricantController.deleteFabricant);


module.exports = router;
