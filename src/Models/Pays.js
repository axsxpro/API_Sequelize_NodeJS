const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importer la configuration de Sequelize
const Continent = require('./Continent'); // Importer le modèle Continent

// Définition du modèle Pays pour correspondre à la structure de la table existante
const Pays = sequelize.define('Pays', {
  id_pays: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_pays', // Nom du champ dans la base de données
  },
  nom_pays: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_pays', // Nom du champ dans la base de données
  },
  id_continent: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_continent',
  },
}, {
  tableName: 'pays',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});

// Définir la relation avec Continent
// belongsTo : chaque pays appartient à un continent
Pays.belongsTo(Continent, { foreignKey: 'id_continent' });

module.exports = Pays;