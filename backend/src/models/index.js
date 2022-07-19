const Pokemon = require('./Pokemon');
const Team =  require('./Team');

Team.hasMany(Pokemon);
//Pokemon.hasMany(Team);

module.exports = {
    Pokemon,
    Team
}