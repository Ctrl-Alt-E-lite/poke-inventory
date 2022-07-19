const express = require('express');
const sequelize = require('../db');
const { Team, Pokemon } = require('../models/index');

const router = express.Router();


const {
    getAllTeams,
    getAllPokemonOnTeam,
    getAllPokemon,
    getTeamById,
    getPokemonByPokedex
} = require('../controller/index');

//routers
router.get('*/teams', getAllTeams); //get all teams
router.get('*/teams/:id/all-pokemon', getAllPokemonOnTeam); //get all pokemon on a team
router.get('*/getAllPokemon', getAllPokemon); //get all pokemon
router.get('*/pokemon/:pokedex', getPokemonByPokedex); //get pokemon by pokedex
router.get('*/team/:id', getTeamById); //get team by id
//get teams a pokemon is on
//delete team
//delete pokemon
//create a team
//add pokemon to a team
//update a team


module.exports = router;