const express = require('express');
const router = express.Router();
const marqueController = require('../Controllers/marqueController');

/**
 * @swagger
 * tags:
 *   name: Marques
 *   description: Marques CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Marque:
 *       type: object
 *       required:
 *         - nom_marque
 *         - id_pays
 *         - id_fabricant
 *       properties:
 *         nom_marque:
 *           type: string
 *           description: The name of the marque
 *         id_pays:
 *           type: integer
 *           description: The ID of the associated pays
 *         id_fabricant:
 *           type: integer
 *           description: The ID of the associated fabricant
 *       example:
 *         nom_marque: "Marque Example"
 *         id_pays: 1
 *         id_fabricant: 1
 */


/**
 * @swagger
 * /api/marques:
 *   get:
 *     summary: Get a list of marques
 *     tags: [Marques]
 *     description: Retrieve a list of marques from the database.
 *     responses:
 *       200:
 *         description: A list of marques
 *         content:
 *       404:
 *         description: Marques not found
 */
router.get('/', marqueController.getMarques);  // GET ALL


/**
 * @swagger
 * /api/marques/{id}:
 *   get:
 *     summary: Get a marque by ID
 *     tags: [Marques]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The marque ID
 *     responses:
 *       200:
 *         description: A single marque
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Marque'
 *       404:
 *         description: Marque not found
 */
router.get('/:id', marqueController.getMarqueById); // GET by ID


/**
 * @swagger
 * /api/marques:
 *   post:
 *     summary: Create a new marque
 *     tags: [Marques]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marque'
 *     responses:
 *       201:
 *         description: Marque created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', marqueController.createMarque); // POST/CREATE


/**
 * @swagger
 * /api/marques/{id}:
 *   put:
 *     summary: Update a marque
 *     tags: [Marques]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The marque ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Marque'
 *     responses:
 *       200:
 *         description: Marque updated successfully
 *       404:
 *         description: Marque not found
 */
router.put('/:id', marqueController.updateMarque); // UPDATE by ID


/**
 * @swagger
 * /api/marques/{id}:
 *   delete:
 *     summary: Delete a marque
 *     tags: [Marques]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The marque ID
 *     responses:
 *       200:
 *         description: Marque deleted successfully
 *       404:
 *         description: Marque not found
 */
router.delete('/:id', marqueController.deleteMarque); // DELETE by ID

module.exports = router;

