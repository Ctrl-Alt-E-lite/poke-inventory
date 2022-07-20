const express = require('express');
const app = express()
const sequelize = require('../db');
const { Team, Pokemon } = require('../models/index');

/**
 * @desc Get all Teams
 * @route GET api/teams
 * @access Public
 */

exports.getAllTeams = async (req, res) => {
    try{
        const allTeams = await Team.findAll();
        if(allTeams){
            res.status(200).json({
                allTeams,
                success: true,
                message: 'All teams returned'
            })            
        }else{
            res.status(400).json({
                success: false,
                message: 'No teams found'
            })
        }
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: true,
            message: 'All teams not returned - ERROR: ', error
        })
    }
}
/**
 * @desc Get all Pokemon on a team
 * @route GET api/teams/:id/all-pokemon
 * @access Public
 */
exports.getAllPokemonOnTeam = async (req, res) => {
    try{
        const teamId = req.params.id;
        const findPokemonOnTeam = await Team.findByPk(teamId, {
            attributes:['pokemon']
        });
        res.status(200).json({
            findPokemonOnTeam,
            success: true,
            message: 'Pokemon on Team returned'
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Pokemon on Team not returned - ERROR: ', error
        })
    }
}
/**
 * @desc Get All pokemon
 * @route GET api/getAllPokemon
 * @access Public
 */
exports.getAllPokemon =  async (req, res) => {
    try{
        const getPokemon = await Pokemon.findAll()
        res.status(200).json({
            getPokemon,
            success: true,
            message: 'Pokemon returned'
        })
    } catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'pokemon not returned'
        })
    }
}
/**
 * @desc Get team by id
 * @route GET api/team/:id
 * @access Public
 */
exports.getTeamById = async (req, res) => {
    try{
        const teamId = req.params.id;
        const foundTeam = await Team.findByPk(teamId);
        res.status(200).json({
            foundTeam,
            success: true,
            message: 'Team by Id returned'
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Team by ID not returned - ERROR: ', error
        })
    }
}
/**
 * @desc Get Pokemon by Pokedex
 * @route GET api/pokemon/:pokedex
 * @access Public
 */
exports.getPokemonByPokedex = async (req, res) => {
    try{
        const ParamsPokedex = req.params.pokedex;
        const foundPokemon = await Pokemon.findAll({
            where:{
                pokedex: ParamsPokedex
            }
        })
        res.status(200).json({
            foundPokemon,
            success: true,
            message: 'Pokemon by pokedex returned'
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Pokemon not returned by Pokedex -  ERROR: ', error
        })
    }
}
/**
 * @desc Delete team
 * @route DELETE api/delete/team/:id
 * @access Private
 */
exports.deleteTeam = async (req, res) => {
    try{
        const teamId = req.params.id;
        const foundTeam = await Team.findByPk(teamId);
        const deletedTeam = await foundTeam.destroy();
        res.status(200).json({
            deletedTeam,
            success: true,
            message: 'Team deleted'
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Team not deleted -  ERROR: ', error
        })
    }
}
/**
 * @desc Create team
 * @route POST api/create/team/
 * @access Public
 */
exports.createTeam = async (req, res) => {
    try{
        const teamBody = req.body;        
        const newTeam = await Team.create(teamBody);
        res.status(200).json({
            newTeam,
            success: true,
            message: 'New team create'
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Team not added - ERROR: ', error
        })
    }
}
/**
 * @desc add pokemon to team
 * @route PUT api/add-pokemon/:pokedex/team/:id
 * @access Public
 */
exports.addPokemonToTeam = async (req, res) => {
    try{
        const teamId = req.params.id;
        const ParamsPokedex = req.params.pokedex;
        const PokemonToAdd = await Pokemon.findAll({
            where : {
                pokedex : ParamsPokedex
            }
        }); 
        const teamToUpdate = await Team.findByPk(teamId);
        const pokedex = PokemonToAdd[0].dataValues.pokedex
        let pokemonList = teamToUpdate.dataValues.pokemon;
        //change json to js 
        pokemonList = JSON.parse(pokemonList);
        if(pokemonList < 6) {
            pokemonList.push(pokedex);
            const updatedTeam = await teamToUpdate.update({pokemon : pokemonList});
            res.status(200).json({
                updatedTeam,
                success: true,
                message: 'Pokemon Added'
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'You already have 6 pokemon on your team'
            })
        }

    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Pokemon not added to team - ERROR: ', error
        })
    }
}
/**
 * @desc delete pokemon off team
 * @route PUT api/delete/team/:id/pokemon/:pokedex
 * @access Public
 */
exports.deletePokemonOffTeam = async (req, res) => {
    try{
        const teamId = req.params.id;
        const paramsPokedex = req.params.pokedex;
        const pokedex = Number(paramsPokedex);

        //find team that has pokemon to delete
        const findTeam = await Team.findByPk(teamId);
        let pokemonList = findTeam.dataValues.pokemon;
        pokemonList = JSON.parse(pokemonList);

        //check pokemonList is greater than 0 and check the pokemon to delete is in the team list
        if(pokemonList.length > 0 && pokemonList.includes(pokedex)){
            const index = pokemonList.indexOf(pokedex);
            console.log(index)
            pokemonList.splice(index, 1);
        }else{
            res.status(400).json({
                success: false,
                message: 'That pokemon is not on the team!'
            })
        } 
        const teamUpdated = await findTeam.update({pokemon: pokemonList});
        res.status(200).json({
            teamUpdated,
            success: true,
            message: 'Pokemon deleted'
        });
        
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Pokemon not deleted off team - ERROR', error
        })
    }
}
/**
 * @desc Update team name
 * @route PUT api/update/team-name/:id
 * @access Private
 */
exports.updateTeamName = async (req, res) => {
    try{
        const name = req.body;
        const teamId = req.params.id;

        const teamToUpdate = await Team.findByPk(teamId);
        const updatedTeam = await teamToUpdate.update(name);
        res.status(200).json({
            updatedTeam,
            sucess: true,
            message: 'Updated team name'
        })

    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: 'Team name not updated - ERROR : ', error
        })
    }
}
// /**
//  * @desc Update teamId
//  * @route PUT api/add-team-id/:id/pokemon/:pokedex
//  * @access Private
//  */
// exports.addTeamIdToPokemon = async (req, res) => {
//     try{
//         const paramsPokedex = req.params.pokedex;
//         //change paramsPokedex to a number
//         const pokedex = Number(paramsPokedex);
        
//         const paramsTeamId = req.params.id;
//         //change paramsTeamId to a number
//         const numTeamId = Number(paramsTeamId);


//         //get team first to check if pokemon is in team
//         const findTeam = await Team.findByPk(paramsTeamId);
        
//         //get pokemon to update
//         const findPokemon = await Pokemon.findAll({
//             where: {
//                 pokedex : paramsPokedex
//             }
//         });
//         let teamIdField = findPokemon[0].dataValues.teamId;
//         teamIdField = JSON.parse(teamIdField);
//         teamIdField.teamID = numTeamId
//         console.log(teamIdField)
//         let pokemonList = findTeam.dataValues.pokemon;
//         pokemonList = JSON.parse(pokemonList);

//         if(pokemonList.includes(pokedex)){
//             //const updatedPokemon = await findPokemon.update({teamId : paramsTeamId});
//             res.status(200).json({
//                 //updatedPokemon,
//                 success: true,
//                 message: 'Team ID updated!'
//             })
//         }else{
//             res.status(400).json({
//                 success: false,
//                 message: 'This pokemon is not in on your team'
//             })
//         }

//     }catch(error){
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: 'TeamId not added - ERROR : ', error
//         })
//     }
// }