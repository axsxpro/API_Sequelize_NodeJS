const Marque = require('../Models/Marque');
const Fabricant = require('../Models/Fabricant');
const Pays = require('../Models/Pays');
const marqueInclusion = require('../Models/utils/marqueInclusion');


// Récupérer toutes les marques
async function getMarques(req, res) {
    try {
        const marques = await Marque.findAll(marqueInclusion.getMarqueInclusions());
        res.json(marques);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Récupérer une marque par son ID
async function getMarqueById(req, res) {
    try {
        const marque = await Marque.findByPk(req.params.id, marqueInclusion.getMarqueInclusions);
        if (!marque) {
            return res.status(404).json({ error: 'Marque not found' });
        }
        res.json(marque);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Créer une nouvelle marque
async function createMarque(req, res) {
    try {
        const newMarque = await Marque.create(req.body);
        res.status(201).json(newMarque);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Mettre à jour une marque par son ID
async function updateMarque(req, res) {
    try {
        const marque = await Marque.findByPk(req.params.id);
        if (!marque) {
            return res.status(404).json({ message: 'Marque not found' });
        }
        await marque.update(req.body);
        res.json(marque);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Supprimer une marque par son ID
async function deleteMarque(req, res) {
    const marqueId = req.params.id;
    try {
        const marque = await Marque.findByPk(marqueId);
        if (!marque) {
            return res.status(404).json({ message: "Marque not found" });
        }
        await marque.destroy();
        res.json({ message: `Marque id: ${marqueId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getMarques,
    getMarqueById,
    createMarque,
    updateMarque,
    deleteMarque
};
