const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion');
// const Vente = require('./Vente');

const Ticket = sequelize.define('Ticket', {
    annee: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'annee',
    },
    numero_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field:'numero_ticket'
    },
    date_vente: {
        type: DataTypes.DATE,
        allowNull: false,
        field:'date_vente'
    },
    heure_vente: {
        type: DataTypes.TIME,
        allowNull: false,
        field:'heure_vente'
    }
}, {
    tableName: 'ticket',
    timestamps: false
});

// Ticket.hasMany(Vente, {
//     foreignKey: 'annee',
//     sourceKey: 'annee'
// });
// Ticket.hasMany(Vente, {
//     foreignKey: 'numero_ticket',
//     sourceKey: 'numero_ticket'
// });


module.exports = Ticket;
