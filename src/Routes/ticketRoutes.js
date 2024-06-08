const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketController');

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Tickets CRUD
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Ticket:
 *       type: object
 *       required:
 *         - annee
 *         - numero_ticket
 *         - date_vente
 *         - heure_vente
 *       properties:
 *         annee:
 *           type: integer
 *           description: The year of the ticket
 *         numero_ticket:
 *           type: integer
 *           description: The number of the ticket
 *         date_vente:
 *           type: string
 *           format: date
 *           description: The date of the sale
 *         heure_vente:
 *           type: string
 *           format: time
 *           description: The time of the sale
 *       example:
 *         annee: 2023
 *         numero_ticket: 1
 *         date_vente: "2023-05-15"
 *         heure_vente: "14:30:00"
 */


/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Get a list of tickets
 *     tags: [Tickets]
 *     description: Retrieve a list of tickets from the database.
 *     responses:
 *       200:
 *         description: A list of tickets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ticket'
 *       404:
 *         description: Tickets not found
 */
router.get('/', ticketController.getTickets);  // GET ALL


/**
 * @swagger
 * /api/tickets/{year}/{num}:
 *   get:
 *     summary: Get a ticket by year and number
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the ticket
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *         description: The number of the ticket
 *     responses:
 *       200:
 *         description: A single ticket
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 *       404:
 *         description: Ticket not found
 */
router.get('/:year/:num', ticketController.getTicketById); // GET by ID


/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ticket'
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', ticketController.createTicket); // POST/CREATE


/**
 * @swagger
 * /api/tickets/{year}/{num}:
 *   put:
 *     summary: Update a ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the ticket
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *         description: The number of the ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ticket'
 *     responses:
 *       200:
 *         description: Ticket updated successfully
 *       404:
 *         description: Ticket not found
 */
router.put('/:year/:num', ticketController.updateTicket); // UPDATE by ID


/**
 * @swagger
 * /api/tickets/{year}/{num}:
 *   delete:
 *     summary: Delete a ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *         description: The year of the ticket
 *       - in: path
 *         name: num
 *         required: true
 *         schema:
 *           type: integer
 *         description: The number of the ticket
 *     responses:
 *       200:
 *         description: Ticket deleted successfully
 *       404:
 *         description: Ticket not found
 */
router.delete('/:year/:num', ticketController.deleteTicket); // DELETE by ID

module.exports = router;
