const express = require('express');
const router = express.Router();
const marqueController = require('../Controllers/marqueController');

// routes pour les marques
router.get('/', marqueController.getMarques);
router.get('/:id', marqueController.getMarqueById);
router.post('/', marqueController.createMarque);
router.put('/:id', marqueController.updateMarque);
router.delete('/:id', marqueController.deleteMarque);

module.exports = router;
