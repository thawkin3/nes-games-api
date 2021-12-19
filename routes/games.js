const express = require('express');
const nesGames = require('../nes_games.json');

const router = express.Router();

router.get('/', function (req, res) {
  res.json({ data: nesGames });
});

router.get('/:gameId', function (req, res) {
  const game = nesGames.find((game) => String(game.id) === req.params.gameId);

  res.json({ data: game });
});

module.exports = router;
