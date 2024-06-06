const Couleur = require('../Models/Couleur');


//récupérer toutes les couleurs 
exports.getCouleurs = async (req, res) => {
    try {
        const couleurs = await Couleur.findAll();
        res.json(couleurs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//récupérer couleur par son id
exports.getCouleurById = async (req, res) => {
    try {
        const couleur = await Couleur.findByPk(req.params.id);
        if (!couleur) {
            return res.status(404).json({ error: 'Couleur not found' });
        }
        res.json(couleur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//créer une couleur
exports.createCouleur = async (req, res) => {
    try {
        const newCouleur = await Couleur.create(req.body);
        res.status(201).json(newCouleur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//mettre à jour une couleur
exports.updateCouleur = async (req, res) => {
    try {
        const couleur = await Couleur.findByPk(req.params.id);
        if (!couleur) {
            return res.status(404).json({ message: 'Couleur not found' });
        }
        await couleur.update(req.body);
        res.json(couleur);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//supprimer une couleur
exports.deleteCouleur = async (req, res) => {
    
    const idCouleur = req.params.id;
    
    try {
        const couleur = await Couleur.findByPk(idCouleur);
        if (!couleur) {
            return res.status(404).json({ message: 'Couleur not found' });
        }
        await couleur.destroy();
        res.json({ message: `Couleur id: ${idCouleur} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }


};
