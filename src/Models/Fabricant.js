const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importez la configuration de Sequelize

// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Fabricant = sequelize.define('Fabricant', {
  id_fabricant: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_fabricant', // Nom du champ dans la base de données
  },
  nom_fabricant: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_fabricant', // Nom du champ dans la base de données
  },
}, {
  tableName: 'fabricant',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});

module.exports = Fabricant;