const Ticket = require("../Models/Ticket");



// Récupérer tous les tickets
async function getTickets(req, res) {
  try {
    const tickets = await Ticket.findAll({limit: 10 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Récupérer un ticket par ses clés primaires (annee et numero_ticket)
async function getTicketById(req, res) {
  //destructuration d'objets
  //req.params : objet contenant les paramètres de l'URL
  //extraire les valeurs des propriétés year et num de cet objet et les assignez à des variables locales nommées year et num
  //équivaut à : const year = req.params.year; const num = req.params.num;
  const { year, num } = req.params;

  try {
    const ticket = await Ticket.findOne({
      where: { annee: year, numero_ticket: num },
    });
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Créer un nouveau ticket
async function createTicket(req, res) {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Mettre à jour un ticket par ses clés primaires (annee et numero_ticket)
async function updateTicket(req, res) {
  //extraire les valeurs des PARAMETRE DE LA REQUETE! et les assigner à les variables year et num
  const { year, num } = req.params;

  // Extraire les données du CORPS DE LA REQUETE! et exclure les clés primaires
  // déstructuration rest (...): utilisé pour rassembler les propriétés restantes de req.body
  const { annee, numero_ticket, ...updateData } = req.body;

  try {

    // Recherche du ticket qui doit être mis à jour par les clés primaires
    const findTicket = await Ticket.findOne({ where: { annee: year, numero_ticket: num } });
    if (!findTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    //updated va contenir le reste du corps de la requete : date_vente et heure_vente
    //on va mettre à jour uniquement ces données
    //const [updated] contiendra le nombre de lignes affectées par la mise à jour
    const [updated] = await Ticket.update(updateData, {
      where: { annee: year, numero_ticket: num },
    });

    //recherche du ticket mis à jour par les clés primaires et renvoie du ticket au format JSON
    const updatedTicket = await Ticket.findOne({where: { annee: year, numero_ticket: num },});
    res.json(updatedTicket);


  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}


// Supprimer un ticket par ses clés primaires (annee et numero_ticket)
async function deleteTicket(req, res) {

  const { year, num } = req.params;

  try {
    const deleted = await Ticket.destroy({
      where: { annee: year, numero_ticket: num },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json({ message: "Ticket deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
