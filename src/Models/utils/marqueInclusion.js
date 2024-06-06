const Fabricant = require('../Fabricant');
const Pays = require('../Pays');
const { getPaysInclusions } = require('./paysInclusion'); // Importer la méthode getPaysInclusions depuis paysInclusion.js

function getMarqueInclusions() {
    return {
        attributes: { exclude: ['id_pays', 'id_fabricant'] }, // Exclure les attributs id_pays et id_fabricant
        include: [
            Fabricant, // Inclure le modèle Fabricant
            { 
                model: Pays, //model Pays
                as: 'Pays',  // alias
                ...getPaysInclusions() // Utiliser la méthode getPaysInclusions() pour obtenir les inclusions et les attributs (spread operator)
            } 
        ]
    };
}

module.exports = {
    getMarqueInclusions
};

