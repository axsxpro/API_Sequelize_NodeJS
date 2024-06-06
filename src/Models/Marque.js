const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importer la configuration de Sequelize
const Pays = require('./Pays'); // Importer le modèle Pays
const Fabricant = require('./Fabricant'); // Importer le modèle Fabricant


// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Marque = sequelize.define('Marque', {
  id_marque: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_marque', // Nom du champ dans la base de données
  },
  nom_marque: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_marque', // Nom du champ dans la base de données
  },  
  id_pays: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_pays',
  },
    id_fabricant: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_fabricant',
  },
}, {
  tableName: 'marque',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});

// Définir les relations avec Fabricant et Pays
// belongsTo : chaque marque appartient à un fabricant et à un pays
Marque.belongsTo(Fabricant, { foreignKey: 'id_fabricant' });
Marque.belongsTo(Pays, { foreignKey: 'id_pays', as: 'Pays' });

module.exports = Marque;