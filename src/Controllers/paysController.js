const Pays = require('../Models/Pays');
const {getPaysInclusions} = require('../Models/utils/paysInclusion');


//récupérer tous les pays
async function getPays(req, res) {
    try {
        const pays = await Pays.findAll(getPaysInclusions());
        res.json(pays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


//récupérer un pays par son id
async function getPaysById(req, res) {
    try {
        const pays = await Pays.findByPk(req.params.id, getPaysInclusions());
        if (!pays) {
            return res.status(404).json({ error: 'Pays not found' });
        }
        res.json(pays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//créer un pays 
async function createPays (req, res){
    
    try {
        const newPays = await Pays.create(req.body);
        res.status(201).json(newPays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//mettre a jour un pays par son id 
async function updatePays(req, res) {
    try {
        const pays = await Pays.findByPk(req.params.id);
        if (!pays) {
            return res.status(404).json({ message: 'Pays not found' });
        }
        await pays.update(req.body);
        res.json(pays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


//supprimer un pays par son id 
async function deletePays(req, res) {

    const paysId = req.param.id;
    
     try {
        const pays = await Pays.findByPk(paysId);
        if (!pays) {
            return res.status(404).json({ message: "Pays not found" });
        }
        await pays.destroy();
        res.json({ message: "pays id:" + paysId + " deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getPays,
    getPaysById,
    createPays,
    updatePays,
    deletePays
};
