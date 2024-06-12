const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion');
const Roles = require('../Constants/roles');  // Importez vos rôles

const Role = sequelize.define('Role', {
    id_role: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom_role: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
        validate: {
            isIn: { // isIn:  validation intégrée à Sequelize qui vérifie si la valeur du champ appartient à un tableau donné de valeurs autorisées.
                args: [Object.values(Roles)], // Object.values(Roles) extrait les valeurs de l'objet Roles, et retourne un tableau contenant les valeurs des propriétés de l'objet Roles, c'est-à-dire ['admin', 'user', 'moderator']
                msg: 'Role not allowed' // Message d'erreur personnalisé si la validation échoue
            }
        }
    }
}, {
    tableName: 'role',
    timestamps: false
});

module.exports = Role;
