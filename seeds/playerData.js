const { Player } = require("../models")

const playerData = [
  {
    games_played: 67,
    player_id: 237,
    name: "LeBron James",
    season: 2019,
    min: "34:34",
    fgm: 9.6,
    fga: 19.45,
    fg3m: 2.21,
    fg3a: 6.34,
    ftm: 3.94,
    fta: 5.69,
    oreb: 0.96,
    dreb: 6.85,
    reb: 7.81,
    ast: 10.21,
    stl: 1.16,
    blk: 0.55,
    turnover: 3.9,
    pf: 1.76,
    pts: 25.34,
    fg_pct: 0.493,
    fg3_pct: 0.348,
    ft_pct: 0.693,
  },
  {
    games_played: 68,
    player_id: 192,
    name: "James Harden",
    season: 2019,
    min: "36:30",
    fgm: 9.88,
    fga: 22.26,
    fg3m: 4.4,
    fg3a: 12.4,
    ftm: 10.18,
    fta: 11.76,
    oreb: 1.01,
    dreb: 5.53,
    reb: 6.54,
    ast: 7.53,
    stl: 1.84,
    blk: 0.88,
    turnover: 4.49,
    pf: 3.34,
    pts: 34.34,
    fg_pct: 0.444,
    fg3_pct: 0.355,
    ft_pct: 0.865,
  },
  {
    games_played: 64,
    player_id: 15,
    name: "Giannis Antetokoumpo",
    season: 2019,
    min: "29:56",
    fgm: 10.7,
    fga: 19.34,
    fg3m: 1.39,
    fg3a: 4.58,
    ftm: 6.22,
    fta: 9.83,
    oreb: 2.19,
    dreb: 11.19,
    reb: 13.38,
    ast: 5.53,
    stl: 0.97,
    blk: 1.03,
    turnover: 3.59,
    pf: 3.05,
    pts: 29.02,
    fg_pct: 0.553,
    fg3_pct: 0.304,
    ft_pct: 0.633,
  },
  {
    games_played: 82,
    player_id: 2931,
    name: "Micheal Jordan",
    season: 1990,
    min: "37:00",
    fgm: 12.07,
    fga: 22.4,
    fg3m: 0.35,
    fg3a: 1.13,
    ftm: 6.96,
    fta: 8.18,
    oreb: 1.44,
    dreb: 4.56,
    reb: 6.0,
    ast: 5.52,
    stl: 2.72,
    blk: 1.01,
    turnover: 2.46,
    pf: 2.79,
    pts: 31.46,
    fg_pct: 0.539,
    fg3_pct: 0.312,
    ft_pct: 0.851,
  },
  {
    games_played: 78,
    player_id: 220,
    name: "Dwight Howard",
    season: 2010,
    min: "37:37",
    fgm: 7.94,
    fga: 13.38,
    fg3m: 0.0,
    fg3a: 0.09,
    ftm: 7.0,
    fta: 11.74,
    oreb: 3.96,
    dreb: 10.12,
    reb: 14.08,
    ast: 1.37,
    stl: 1.37,
    blk: 2.38,
    turnover: 3.58,
    pf: 3.31,
    pts: 22.87,
    fg_pct: 0.593,
    fg3_pct: 0.0,
    ft_pct: 0.596,
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;