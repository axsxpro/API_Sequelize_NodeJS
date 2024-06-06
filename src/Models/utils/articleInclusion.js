const Couleur = require('../Couleur');
const Marque = require('../Marque');
const Type = require('../Type');
const { getMarqueInclusions } = require('./marqueInclusion'); // Importer la méthode getPaysInclusions depuis paysInclusion.js

function getArticleInclusion() {
    
    return {
        attributes: { exclude: ['id_marque', 'id_couleur', 'id_type'] }, // Exclure les attributs id_pays et id_fabricant
        include: [
                {model: Marque, ...getMarqueInclusions()},
                Couleur, // Inclure le modèle Couleur
                Type // Inclure le modèle Type
            ] 
    };
}

module.exports = {
    getArticleInclusion
};