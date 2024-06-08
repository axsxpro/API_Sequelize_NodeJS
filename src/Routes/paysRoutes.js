const express = require('express');
const router = express.Router();
const paysController = require('../Controllers/paysController');

/**
 * @swagger
 * tags:
 *   name: Pays
 *   description: Pays CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pays:
 *       type: object
 *       required:
 *         - nom_pays
 *         - id_continent
 *       properties:
 *         nom_pays:
 *           type: string
 *           description: The name of the country
 *         id_continent:
 *           type: integer
 *           description: The ID of the associated continent
 *       example:
 *         nom_pays: "France"
 *         id_continent: 1
 */


/**
 * @swagger
 * /api/pays:
 *   get:
 *     summary: Get a list of pays
 *     tags: [Pays]
 *     description: Retrieve a list of pays from the database.
 *     responses:
 *       200:
 *         description: A list of pays
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pays'
 *       404:
 *         description: Pays not found
 */
router.get('/', paysController.getPays);  // GET ALL


/**
 * @swagger
 * /api/pays/{id}:
 *   get:
 *     summary: Get a pays by ID
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The pays ID
 *     responses:
 *       200:
 *         description: A single pays
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pays'
 *       404:
 *         description: Pays not found
 */
router.get('/:id', paysController.getPaysById); // GET by ID


/**
 * @swagger
 * /api/pays:
 *   post:
 *     summary: Create a new pays
 *     tags: [Pays]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pays'
 *     responses:
 *       201:
 *         description: Pays created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', paysController.createPays); // POST/CREATE


/**
 * @swagger
 * /api/pays/{id}:
 *   put:
 *     summary: Update a pays
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The pays ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pays'
 *     responses:
 *       200:
 *         description: Pays updated successfully
 *       404:
 *         description: Pays not found
 */
router.put('/:id', paysController.updatePays); // UPDATE by ID


/**
 * @swagger
 * /api/pays/{id}:
 *   delete:
 *     summary: Delete a pays
 *     tags: [Pays]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The pays ID
 *     responses:
 *       200:
 *         description: Pays deleted successfully
 *       404:
 *         description: Pays not found
 */
router.delete('/:id', paysController.deletePays); // DELETE by ID

module.exports = router;
