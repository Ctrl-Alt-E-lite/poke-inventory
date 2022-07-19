//seeder file
const sequelize = require('./src/db'); //database
// const Team = require('./src/models/Team'); //model
// const Pokemon = require('./src/models/Pokemon'); //model
const { Team, Pokemon } = require('./src/models/index');
const fs = require('fs').promises;
const path = require('path');

const populateDb = async () => {
    console.log('populating DB...');

    await sequelize.sync({ force: true }); //clear out db

    const userTeamPath = path.join(__dirname, 'src', 'data', 'teamData.json'); //get path to seed data
    const userPokemonPath = path.join(__dirname, 'src', 'data', 'pokemonData.json'); //get path to seed data

   
    //asynchronously reads the content in this file
    const teamBuffer = await fs.readFile(userTeamPath);
    const pokemonBuffer = await fs.readFile(userPokemonPath);


    // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const teamsData = JSON.parse(String(teamBuffer));
    const pokemonData = JSON.parse(String(pokemonBuffer));

    //creates team and puts it into our teams table
    const TeamPromises = teamsData.map((team) => Team.create(team));
    const PokemonPromises = pokemonData.map((pokemon) => Pokemon.create(pokemon));


    // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(TeamPromises);
    await Promise.all(PokemonPromises);


    console.log('Team database info populated');
};

populateDb();