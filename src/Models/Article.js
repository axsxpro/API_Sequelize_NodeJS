const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importez la configuration de Sequelize
const Marque = require('./Marque'); // Importer le modèle Marque
const Couleur = require('./Couleur'); // Importer le modèle Couleur
const Type = require('./Type'); // Importer le modèle Couleur


// Définition du modèle Couleur pour correspondre à la structure de la table existante
const Article = sequelize.define('Article', {
  id_article: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_article', // Nom du champ dans la base de données
  },
  nom_article: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nom_article', // Nom du champ dans la base de données
  },  
  prix_achat: {
     type: DataTypes.DECIMAL,
     allowNull: false,
     field: 'prix_achat',
  },
  volume: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'volume',
  },
  titrage: {
     type: DataTypes.DOUBLE,
     allowNull: false,
     field: 'titrage',
  },
  id_marque: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_marque',
  },
  id_couleur: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_couleur',
  },
  id_type: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: 'id_type',
  },
}, {
  tableName: 'article',  // Nom de la table dans la base de données
  timestamps: false,    // Désactiver les timestamps automatiques (createdAt, updatedAt)
});

// Définir les relations avec Fabricant et Pays
// belongsTo : chaque article à une marque, une couleur et un type
Article.belongsTo(Marque, { foreignKey: 'id_marque' });
Article.belongsTo(Couleur, { foreignKey: 'id_couleur' });
Article.belongsTo(Type, { foreignKey: 'id_type' });

// Article.hasMany(Vente, {foreignKey: 'id_article',sourceKey: 'id_article'});

module.exports = Article;