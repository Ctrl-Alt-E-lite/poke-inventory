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