//MODEL
const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Team = sequelize.define('team', {
    teamName : Sequelize.STRING,
    pokemon: Sequelize.JSON
});

module.exports = Team;