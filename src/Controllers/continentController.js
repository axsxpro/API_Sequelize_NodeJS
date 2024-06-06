const Continent = require('../Models/Continent');

exports.getContinents = async (req, res) => {
    try {
        const continents = await Continent.findAll();
        res.json(continents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Récupérer un continent par son ID
// req : Représente l'objet de requête HTTP
// params : paramètre d'URL (:id), défini dans le routeur comme /api/continents/:id
exports.getContinentById = async (req, res) => {
    try {
        const continent = await Continent.findByPk(req.params.id);
        if (!continent) {
            return res.status(404).json({ message: "Continent not found" });
        }
        res.json(continent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Créer un nouveau continent
exports.createContinent = async (req, res) => {
    try {
        const newContinent = await Continent.create(req.body);
        res.status(201).json(newContinent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Mettre à jour un continent
exports.updateContinent = async (req, res) => {
    try {
        const continent = await Continent.findByPk(req.params.id);
        if (!continent) {
            return res.status(404).json({ message: "Continent not found" });
        }
        await continent.update(req.body);
        res.json(continent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Supprimer un continent
exports.deleteContinent = async (req, res) => {
     
    const idContinent = req.params.id;

    try {
        const continent = await Continent.findByPk(idContinent);
        if (!continent) {
            return res.status(404).json({ message: "Continent not found" });
        }
        await continent.destroy();
        res.json({ message: "Continent id:" + idContinent + " deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }


};
