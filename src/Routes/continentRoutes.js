const express = require('express');
const router = express.Router();
const continentController = require('../Controllers/continentController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete

/**
 * @swagger
 * tags:
 *   name: Continents
 *   description: Continents CRUD
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Continent:
 *       type: object
 *       required:
 *         - nom_continent
 *       properties:
 *         nom_continent:
 *           type: string
 *       example:
 *         nom_continent: "Asie"
 */


/**
 * @swagger
 * /api/continents:
 *   get:
 *     summary: Get a list of continents
 *     tags: [Continents]
 *     description: Retrieve a list of continents from the database.
 *     responses:
 *       200:
 *         description: ok
 *       404:
 *         description: Article not found
 */
router.get('/', continentController.getContinents);  // GET ALL


/**
 * @swagger
 * /api/continents/{id}:
 *   get:
 *     summary: Get continent by ID
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The continent ID
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Continent'
 *       404:
 *         description: Continent not found
 */
router.get('/:id', continentController.getContinentById); // GET by ID


/**
 * @swagger
 * /api/continents:
 *   post:
 *     summary: Create a new continent
 *     tags: [Continents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Continent'
 *     responses:
 *       200:
 *         description: ok
 *       404:
 *         description: Continent not found
 */
router.post('/', continentController.createContinent); // POST/CREATE


/**
 * @swagger
 * /api/continents/{id}:
 *   put:
 *     summary: Update a continent
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The continent ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Continent'
 *     responses:
 *       200:
 *         description: Continent updated successfully
 *       404:
 *         description: Continent not found
 */
router.put('/:id', continentController.updateContinent); // UPDATE by ID


/**
 * @swagger
 * /api/continents/{id}:
 *   delete:
 *     summary: Delete a continent
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The continent ID
 *     responses:
 *       200:
 *         description: Continent deleted successfully
 *       404:
 *         description: Continent not found
 */
router.delete('/:id', continentController.deleteContinent); //DELETE by ID


module.exports = router;

