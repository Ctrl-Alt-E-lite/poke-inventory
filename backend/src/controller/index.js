const express = require('express');
const app = express()
const { append } = require('express/lib/response');
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
 * @route POST api/create/team/:pokedex
 * @access Public
 */
exports.createTeam = async (req, res) => {
    try{
        const teamBody = req.body;        
        const ParamsPokedex = req.params.pokedex;
        const PokemonToAdd = await Pokemon.findAll({
            where : {
                pokedex : ParamsPokedex
            }
        });
        const newData = {...teamBody, "pokemon" : {...PokemonToAdd}}
        const newTeam = await Team.create(newData);
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