const express = require('express');
const router = express.Router();
const venteController = require('../Controllers/venteController');

/**
 * @swagger
 * tags:
 *   name: Ventes
 *   description: Ventes CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Vente:
 *       type: object
 *       required:
 *         - annee
 *         - numero_ticket
 *         - id_article
 *         - quantite
 *         - prix_vente
 *       properties:
 *         annee:
 *           type: integer
 *           description: The year of the sale
 *         numero_ticket:
 *           type: integer
 *           description: The ticket number of the sale
 *         id_article:
 *           type: integer
 *           description: The article ID
 *         quantite:
 *           type: integer
 *           description: The quantity sold
 *         prix_vente:
 *           type: number
 *           format: decimal
 *           description: The sale price
 *       example:
 *         annee: 2023
 *         numero_ticket: 1
 *         id_article: 1001
 *         quantite: 2
 *         prix_vente: 19.99
 */


/**
 * @swagger
 * /api/ventes:
 *   get:
 *     summary: Get a list of ventes
 *     tags: [Ventes]
 *     description: Retrieve a list of ventes from the database.
 *     responses:
 *       200:
 *         description: A list of ventes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vente'
 *       404:
 *         description: Ventes not found
 */
router.get('/', venteController.getVentes);  // GET ALL


/**
 * @swagger
 * /api/ventes/{year}/{num}/{id}:
 *   get:
 *     summary: Get a vente by year, ticket number, and article ID
 *     tags: [Ventes]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the vente
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ticket number of the vente
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID of the vente
 *     responses:
 *       200:
 *         description: A single vente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vente'
 *       404:
 *         description: Vente not found
 */
router.get('/:year/:num/:id', venteController.getVenteById); // GET by ID


/**
 * @swagger
 * /api/ventes:
 *   post:
 *     summary: Create a new vente
 *     tags: [Ventes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vente'
 *     responses:
 *       201:
 *         description: Vente created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', venteController.createVente); // POST/CREATE


/**
 * @swagger
 * /api/ventes/{year}/{num}/{id}:
 *   delete:
 *     summary: Delete a vente
 *     tags: [Ventes]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the vente
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ticket number of the vente
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The article ID of the vente
 *     responses:
 *       200:
 *         description: Vente deleted successfully
 *       404:
 *         description: Vente not found
 */
router.delete('/:year/:num/:id', venteController.deleteVente); // DELETE by ID

module.exports = router;

