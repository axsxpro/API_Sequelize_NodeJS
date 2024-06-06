const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importez la configuration de Sequelize

// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Type = sequelize.define('Type', {

  id_type: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_type', // Nom du champ dans la base de données
  },
  nom_type: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_type', // Nom du champ dans la base de données
  },
}, {
  tableName: 'typebiere',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
  
});


module.exports = Type;

