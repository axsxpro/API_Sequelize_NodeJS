const express = require('express');
const router = express.Router();
const homePage = require('../Controllers/homeController'); 

// Route pour la page d'accueil
router.get('/', homePage.home);

module.exports = router;
