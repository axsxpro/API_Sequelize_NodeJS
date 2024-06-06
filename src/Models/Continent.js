const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importer la configuration de Sequelize


// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Continent = sequelize.define('Continent', {
  id_continent: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_continent', // Nom du champ dans la base de données
  },
  nom_continent: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_continent', // Nom du champ dans la base de données
  },
}, {
  tableName: 'continent',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});


module.exports = Continent;
