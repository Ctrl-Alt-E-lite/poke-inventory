const Pokemon = require('./Pokemon');
const Team =  require('./Team');

Pokemon.hasMany(Team);

module.exports = {
    Pokemon,
    Team
}