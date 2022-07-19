//MODEL
const sequelize = require('../db');
const { sequelize, Sequelize } = require('sequelize');

const Team = sequelize.define('team', {
    name: Sequelize.STRING,

});
module.exports = Team;