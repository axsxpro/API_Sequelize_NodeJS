const Fabricant = require('../Models/Fabricant');


// Récupérer tous les fabricants
exports.getFabricants = async (req, res) => {
    try {
        const fabricants = await Fabricant.findAll();
        res.json(fabricants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Récupérer un fabricant par son ID
exports.getFabricantById = async (req, res) => {
    try {
        const fabricant = await Fabricant.findByPk(req.params.id);
        if (!fabricant) {
            return res.status(404).json({ error: 'Fabricant not found' });
        }
        res.json(fabricant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Créer un nouveau fabricant
exports.createFabricant = async (req, res) => {
    try {
        const newFabricant = await Fabricant.create(req.body);
        res.status(201).json(newFabricant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Mettre à jour un fabricant par son ID
exports.updateFabricant = async (req, res) => {
    try {
        const fabricant = await Fabricant.findByPk(req.params.id);
        if (!fabricant) {
            return res.status(404).json({ message: 'Fabricant not found' });
        }
        await fabricant.update(req.body);
        res.json(fabricant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Supprimer un fabricant par son ID
exports.deleteFabricant = async (req, res) => {
    const fabricantId = req.params.id;
    try {
        const fabricant = await Fabricant.findByPk(fabricantId);
        if (!fabricant) {
            return res.status(404).json({ message: "Fabricant not found" });
        }
        await fabricant.destroy();
        res.json({ message: `Fabricant id: ${fabricantId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};