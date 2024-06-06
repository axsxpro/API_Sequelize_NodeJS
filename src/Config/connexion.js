const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("sdbm", "root", "1234", { 
    dialect: "mysql", 
    port: 3307,
    host: "localhost"
    });


module.exports = sequelize;