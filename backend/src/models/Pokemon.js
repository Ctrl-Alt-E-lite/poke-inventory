//model
const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Pokemon = sequelize.define('pokemon', {
    teamId: Sequelize.JSON,
    pokedex: Sequelize.INTEGER,
    num: Sequelize.STRING,
    name: Sequelize.STRING,
    img: Sequelize.STRING,
    type: Sequelize.JSON,
    height: Sequelize.STRING,
    //weight: sequelize.STRING
});

module.exports = Pokemon;