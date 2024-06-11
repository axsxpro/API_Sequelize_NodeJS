const express = require('express');
const router = express.Router();

// Importer les routeurs
const continentRoutes = require('./continentRoutes');
const paysRoutes = require('./paysRoutes');
const couleurRoutes = require('./couleurRoutes');
const fabricantRoutes = require('./fabricantRoutes');
const typeRoutes = require('./typeRoutes');
const marqueRoutes = require('./marqueRoutes');
const articleRoutes = require('./articleRoutes');
const ticketRoutes = require('./ticketRoutes');
const venteRoutes = require('./venteRoutes');



// Utiliser un nom de route spécifique pour chaque ressource
// appel de la route concerné par n'impporte quelle requete HTTP
router.use('/continents', continentRoutes);
router.use('/pays', paysRoutes);
router.use('/couleurs', couleurRoutes);
router.use('/fabricants', fabricantRoutes);
router.use('/types', typeRoutes);
router.use('/marques', marqueRoutes);
router.use('/articles', articleRoutes);
router.use('/tickets', ticketRoutes);
router.use('/ventes', venteRoutes);



module.exports = router;
