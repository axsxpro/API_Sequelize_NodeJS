const express = require('express');
const router = express.Router();
const couleurController = require('../Controllers/couleurController'); // Assurez-vous d'avoir ce contrôleur

/**
 * @swagger
 * tags:
 *   name: Couleurs
 *   description: Couleurs CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Couleur:
 *       type: object
 *       required:
 *         - nom_couleur
 *       properties:
 *         nom_couleur:
 *           type: string
 *           description: The name of the color
 *       example:
 *         nom_couleur: "Rouge"
 */


/**
 * @swagger
 * /api/couleurs:
 *   get:
 *     summary: Get a list of colors
 *     tags: [Couleurs]
 *     description: Retrieve a list of colors from the database.
 *     responses:
 *       200:
 *         description: A list of couleurs
 *       404:
 *         description: Couleurs not found
 */
router.get('/', couleurController.getCouleurs);  // GET ALL


/**
 * @swagger
 * /api/couleurs/{id}:
 *   get:
 *     summary: Get a couleur by ID
 *     tags: [Couleurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The couleur ID
 *     responses:
 *       200:
 *         description: A single couleur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Couleur'
 *       404:
 *         description: Couleur not found
 */
router.get('/:id', couleurController.getCouleurById); // GET by ID


/**
 * @swagger
 * /api/couleurs:
 *   post:
 *     summary: Create a new couleur
 *     tags: [Couleurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Couleur'
 *     responses:
 *       201:
 *         description: Couleur created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', couleurController.createCouleur); // POST/CREATE


/**
 * @swagger
 * /api/couleurs/{id}:
 *   put:
 *     summary: Update a couleur
 *     tags: [Couleurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The couleur ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Couleur'
 *     responses:
 *       200:
 *         description: Couleur updated successfully
 *       404:
 *         description: Couleur not found
 */
router.put('/:id', couleurController.updateCouleur); // UPDATE by ID


/**
 * @swagger
 * /api/couleurs/{id}:
 *   delete:
 *     summary: Delete a couleur
 *     tags: [Couleurs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The couleur ID
 *     responses:
 *       200:
 *         description: Couleur deleted successfully
 *       404:
 *         description: Couleur not found
 */
router.delete('/:id', couleurController.deleteCouleur); // DELETE by ID

module.exports = router;

