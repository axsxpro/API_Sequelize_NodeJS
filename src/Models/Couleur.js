const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importer la configuration de Sequelize

// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Couleur = sequelize.define('Couleur', {
  id_couleur: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_couleur', // Nom du champ dans la base de données
  },
  nom_couleur: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_couleur', // Nom du champ dans la base de données
  },
}, {
  tableName: 'couleur',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});

module.exports = Couleur;

