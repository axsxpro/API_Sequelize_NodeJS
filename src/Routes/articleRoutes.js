const express = require('express');
const router = express.Router();
const articleController = require('../Controllers/articleController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete


/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: Articles CRUD
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - nom_article
 *         - prix_achat
 *         - volume
 *         - titrage
 *         - id_marque
 *         - id_couleur
 *         - id_type
 *       properties:
 *         nom_article:
 *           type: string
 *         prix_achat:
 *           type: number
 *           format: float
 *         volume:
 *           type: number
 *           format: float
 *         titrage:
 *           type: number
 *           format: float
 *         id_marque:
 *           type: integer
 *         id_couleur:
 *           type: integer
 *         id_type:
 *           type: integer
 *       example:
 *         nom_article: "Sample Beer"
 *         prix_achat: 5.99
 *         volume: 0.5
 *         titrage: 5.5
 *         id_marque: 1
 *         id_couleur: 2
 *         id_type: 3
 */


/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Get a list of articles
 *     tags: [Articles]
 *     description: Retrieve a list of articles from the database.
 *     responses:
 *       200:
 *         description: ok
 *       404:
 *         description: Article not found
 */
router.get('/', articleController.getArticles);  // GET ALL


/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get article by ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
router.get('/:id', articleController.getArticleById); // GET by ID



/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Create a new article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Article created successfully
 *       404:
 *         description: Error 
 */
router.post('/', articleController.createArticle); // POST/CREATE


/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update an existing article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: Article updated successfully
 *       404:
 *         description: Article not found
 */
router.put('/:id', articleController.updateArticle); // UPDATE by ID


/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete an article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID
 *     responses:
 *       200:
 *         description: Article deleted successfully
 *       404:
 *         description: Article not found
 */
router.delete('/:id', articleController.deleteArticle); //DELETE by ID


module.exports = router;