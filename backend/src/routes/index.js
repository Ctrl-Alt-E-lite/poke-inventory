const express = require('express');
const sequelize = require('../db');
const { Team, Pokemon } = require('../models/index');

const router = express.Router();


const {
    getAllTeams,
    getAllPokemonOnTeam,
    getAllPokemon,
    getTeamById,
    getPokemonByPokedex,
    deleteTeam,
    createTeam,
    addPokemonToTeam,
    deletePokemonOffTeam,
    updateTeamName,
    //addTeamIdToPokemon
} = require('../controller/index');

//routers
router.get('*/teams', getAllTeams); //get all teams
router.get('*/teams/:id/all-pokemon', getAllPokemonOnTeam); //get all pokemon on a team
router.get('*/getAllPokemon', getAllPokemon); //get all pokemon
router.get('*/pokemon/:pokedex', getPokemonByPokedex); //get pokemon by pokedex
router.get('*/team/:id', getTeamById); //get team by id
//get all teams a pokemon is on
router.delete('*/delete/team/:id', deleteTeam); //delete team
router.post('*/create/team', createTeam); //create a team + add at least one pokemon
router.put('*/add-pokemon/:pokedex/team/:id', addPokemonToTeam)//add pokemon to a team up to 6 can be added
router.put('*/delete/team/:id/pokemon/:pokedex', deletePokemonOffTeam); //delete pokemon off a team - team must have at least 1 pokemon on it
router.put('/update/team-name/:id', updateTeamName); //update a team - update team name
//router.put('*/add-team-id/:id/pokemon/:pokedex', addTeamIdToPokemon); // add teamdId to pokemon 


module.exports = router;