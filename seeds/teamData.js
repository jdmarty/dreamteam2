const { Team } = require('../models');

const teamData = [
  {
    name: "2016 Cavs",
    user_id: 2
  },
  {
    name: "2016 Warriors xxxxxxxxxxxx",
    user_id: 2
  },
  {
    name: "The Best",
    user_id: 2
  },
];

const seedTeams = () => Team.bulkCreate(teamData)

module.exports = seedTeams;