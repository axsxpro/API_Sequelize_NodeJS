const { DataTypes } = require('sequelize');
const sequelize = require('../Config/connexion');
const Role = require('./Role'); // Importer le modèle Role


const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_user',
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'username',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password',
    },
    id_role: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'id_role',
    }
}, {
    tableName: 'users',
    timestamps: false
});

User.belongsToMany(Role, {foreignKey: 'id_role' });

module.exports = User;
