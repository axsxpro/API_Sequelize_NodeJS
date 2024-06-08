const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion'); // Importer la configuration de Sequelize
const Ticket = require('./Ticket'); // Importer le modèle Ticket
const Article = require('./Article'); // Importer le modèle Article

// Définition du modèle Vente
const Vente = sequelize.define('Vente', {
    annee: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'annee',
    },
    numero_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prix_vente: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'vendre',
    timestamps: false
});


// Définir les relations
Vente.belongsTo(Ticket, {foreignKey: 'annee', targetKey: 'annee'});
Vente.belongsTo(Ticket, {foreignKey: 'numero_ticket', targetKey: 'numero_ticket'});
Vente.belongsTo(Article, {foreignKey: 'id_article'});


module.exports = Vente;
