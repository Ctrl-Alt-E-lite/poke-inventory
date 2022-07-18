const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize('poke_inventory', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;