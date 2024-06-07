const express = require('express');
const router = express.Router();
const fabricantController = require('../Controllers/fabricantController');

/**
 * @swagger
 * tags:
 *   name: Fabricants
 *   description: Fabricants CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Fabricant:
 *       type: object
 *       required:
 *         - nom_fabricant
 *       properties:
 *         nom_fabricant:
 *           type: string
 *           description: The name of the fabricant
 *       example:
 *         nom_fabricant: "Fabricant Example"
 */


/**
 * @swagger
 * /api/fabricants:
 *   get:
 *     summary: Get a list of fabricants
 *     tags: [Fabricants]
 *     description: Retrieve a list of fabricants from the database.
 *     responses:
 *       200:
 *         description: A list of fabricants
 *       404:
 *         description: Fabricants not found
 */
router.get('/', fabricantController.getFabricants);  // GET ALL


/**
 * @swagger
 * /api/fabricants/{id}:
 *   get:
 *     summary: Get a fabricant by ID
 *     tags: [Fabricants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The fabricant ID
 *     responses:
 *       200:
 *         description: A single fabricant
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fabricant'
 *       404:
 *         description: Fabricant not found
 */
router.get('/:id', fabricantController.getFabricantById); // GET by ID


/**
 * @swagger
 * /api/fabricants:
 *   post:
 *     summary: Create a new fabricant
 *     tags: [Fabricants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fabricant'
 *     responses:
 *       201:
 *         description: Fabricant created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', fabricantController.createFabricant); // POST/CREATE


/**
 * @swagger
 * /api/fabricants/{id}:
 *   put:
 *     summary: Update a fabricant
 *     tags: [Fabricants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The fabricant ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fabricant'
 *     responses:
 *       200:
 *         description: Fabricant updated successfully
 *       404:
 *         description: Fabricant not found
 */
router.put('/:id', fabricantController.updateFabricant); // UPDATE by ID


/**
 * @swagger
 * /api/fabricants/{id}:
 *   delete:
 *     summary: Delete a fabricant
 *     tags: [Fabricants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The fabricant ID
 *     responses:
 *       200:
 *         description: Fabricant deleted successfully
 *       404:
 *         description: Fabricant not found
 */
router.delete('/:id', fabricantController.deleteFabricant); // DELETE by ID

module.exports = router;
