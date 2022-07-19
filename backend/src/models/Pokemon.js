//model
const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Pokemon = sequelize.define('pokemon', {
    pokedex: Sequelize.INTEGER,
    name: Sequelize.JSON,
    type : Sequelize.JSON,
    base: Sequelize.JSON
});

module.exports = Pokemon;