const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion');

const Role = sequelize.define('Role', {
    id_role: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom_role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'role',
    timestamps: false
});

module.exports = Role;
