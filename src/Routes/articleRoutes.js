const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articleController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete
router.get('/', articleController.getArticles);  // GET ALL
router.get('/:id', articleController.getArticleById); // GET by ID
router.post('/', articleController.createArticle); // POST/CREATE
router.put('/:id', articleController.updateArticle); // UPDATE by ID
router.delete('/:id', articleController.deleteArticle); //DELETE by ID

module.exports = router;