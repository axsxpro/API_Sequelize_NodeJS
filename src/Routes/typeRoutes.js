const express = require('express');
const router = express.Router();
const typeController = require('../Controllers/typeController');

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - nom_type
 *       properties:
 *         id_type:
 *           type: integer
 *           description: The type ID
 *         nom_type:
 *           type: string
 *           description: The name of the type
 *       example:
 *         id_type: 1
 *         nom_type: "Ale"
 */


/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Get a list of types
 *     tags: [Types]
 *     description: Retrieve a list of types from the database.
 *     responses:
 *       200:
 *         description: A list of types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 *       404:
 *         description: Types not found
 */
router.get('/', typeController.getTypes);  // GET ALL


/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: Get type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The type ID
 *     responses:
 *       200:
 *         description: A type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Type'
 *       404:
 *         description: Type not found
 */
router.get('/:id', typeController.getTypeById); // GET by ID


/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Create a new type
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       201:
 *         description: Type created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', typeController.createType); // POST/CREATE


/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     summary: Update a type
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Type'
 *     responses:
 *       200:
 *         description: Type updated successfully
 *       404:
 *         description: Type not found
 */
router.put('/:id', typeController.updateType); // UPDATE by ID


/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Delete a type
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The type ID
 *     responses:
 *       200:
 *         description: Type deleted successfully
 *       404:
 *         description: Type not found
 */
router.delete('/:id', typeController.deleteType); // DELETE by ID


module.exports = router;

