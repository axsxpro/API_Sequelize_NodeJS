const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware'); // Importer les middlewares


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users CRUD
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - id_role
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         id_role:
 *           type: integer
 *           description: The role ID of the user
 *       example:
 *         username: "john_doe"
 *         password: "password123"
 *         id_role: 1
 */


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     tags: [Users]
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Users not found
 */
router.get('/', verifyToken, isAdmin, userController.getUsers);  // GET ALL



//route POST dans authController



/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update an existing user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/:id', verifyToken, isAdmin, userController.updateUser); // UPDATE by ID

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser); // DELETE by ID

module.exports = router;
