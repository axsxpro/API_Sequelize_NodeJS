const Type = require('../Models/Type');


// Récupérer tous les types
async function getTypes(req, res) {
    try {
        const types = await Type.findAll();
        res.json(types);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Récupérer un type par son ID
async function getTypeById(req, res) {
    try {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            return res.status(404).json({ error: 'Type not found' });
        }
        res.json(type);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Créer un nouveau type
async function createType(req, res) {
    try {
        const newType = await Type.create(req.body);
        res.status(201).json(newType);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Mettre à jour un type par son ID
async function updateType(req, res) {
    try {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            return res.status(404).json({ message: 'Type not found' });
        }
        await type.update(req.body);
        res.json(type);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Supprimer un type par son ID
async function deleteType(req, res) {

    const typeId = req.params.id;

    try {
        const type = await Type.findByPk(typeId);
        if (!type) {
            return res.status(404).json({ message: "Type not found" });
        }
        await type.destroy();
        res.json({ message: `Type id: ${typeId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
};
