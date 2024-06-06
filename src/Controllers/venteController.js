const Vente = require("../Models/Vente");
//déstructuration pour importer la méthode getVenteInclusion depuis le fichier venteInclusion.js
const {getVenteInclusion} = require('../Models/utils/venteInclusion');


// Récupérer toutes les ventes
async function getVentes(req, res) {
  try {
    const ventes = await Vente.findAll({...getVenteInclusion(), limit: 10 });
    res.json(ventes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Récupérer une vente par ses clés primaires (année, numéro de ticket et identifiant d'article)
async function getVenteById(req, res) {
  
  const { year, num, id } = req.params;

  try {
   const vente = await Vente.findOne({
      where: { annee: year, numero_ticket: num, id_article: id },
      ...getVenteInclusion() // Inclure les inclusions définies dans getVenteInclusion
    });
    if (!vente) {
      return res.status(404).json({ error: "Vente not found" });
    }
    res.json(vente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


// Créer une nouvelle vente
async function createVente(req, res) {
  try {
    const newVente = await Vente.create(req.body);
    res.status(201).json(newVente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


//pas de update, on ne met pas à jour une vente


// Supprimer une vente par ses clés primaires (année, numéro de ticket et identifiant d'article)
async function deleteVente(req, res) {
  const { year, num, id } = req.params;

  try {
    const deleted = await Vente.destroy({
      where: { annee: year, numero_ticket: num, id_article: id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Vente not found" });
    }
    res.json({ message: "Vente deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = {
  getVentes,
  getVenteById,
  createVente,
  deleteVente,
};
