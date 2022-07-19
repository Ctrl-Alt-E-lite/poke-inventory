//DB using Sequelize to connect
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('poke_inventory', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;