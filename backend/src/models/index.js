const Pokemon = require('./Pokemon');
const Team =  require('./Team');

Pokemon.belongsToMany(Team, { through: 'Temp' });
Team.belongsToMany(Pokemon, { through: 'Temp' });

module.exports = {
    Pokemon,
    Team
}