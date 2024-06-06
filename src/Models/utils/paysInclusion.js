const Continent = require('../Continent');

function getPaysInclusions() {

    return {
      attributes: { exclude: ['id_continent'] }, //exclure l'attribut id_continent
      include : Continent //à la place renvoyer le model Continent
    };
}

module.exports = {
    getPaysInclusions
};

