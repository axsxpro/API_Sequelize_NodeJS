const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketController');

// route pour chaque requete HTTP
// récupération de la méthode dans le controller pour chaque requete

router.get('/', ticketController.getTickets);  // GET ALL
router.get('/:year/:num', ticketController.getTicketById); // GET by ID
router.post('/', ticketController.createTicket); // POST/CREATE
router.put('/:year/:num', ticketController.updateTicket); // UPDATE by ID
router.delete('/:year/:num', ticketController.deleteTicket); //DELETE by ID

module.exports = router;