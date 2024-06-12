const Role = require('../Role');


function getUserInclusion() {
    
    return {
        attributes: { exclude: ['password', 'id_role'] }, // Exclure les attributs
        include: [
                Role, // Inclure le modèle Role
            ] 
    };
}

module.exports = {
    getUserInclusion
};