const express = require('express');
const sequelize = require('../db');
const { Team, Pokemon } = require('../models/index');

const router = express.Router();


const {
    getAllTeams,
    getAllPokemonOnTeam,
    getAllPokemon
} = require('../controller/index');

//routers
router.get('*/teams', getAllTeams); //get all teams
router.get('*/teams/:id/all-pokemon', getAllPokemonOnTeam); //get all pokemon on a team
router.get('*/getAllPokemon', getAllPokemon);
//get all pokemon
//get pokemon by pokedex
//get team by id



module.exports = router;