const express = require('express');
const nesGames = require('../nes_games.json');

const router = express.Router();

router.get('/', function (req, res) {
  const developers = nesGames.reduce((developers, game) => {
    if (developers.includes(game.developer) || !game.developer) {
      return developers;
    }

    return [...developers, game.developer];
  }, []);

  const developersJsonResult = { data: developers.sort() };

  res.json(developersJsonResult);
});

router.get('/:developer', function (req, res) {
  const developer = req.params.developer;
  const gamesByDeveloper = nesGames.filter(
    (games) => games.developer === developer
  );

  res.json({ data: gamesByDeveloper });
});

module.exports = router;
