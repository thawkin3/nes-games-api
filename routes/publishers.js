const express = require('express');
const nesGames = require('../nes_games.json');

const router = express.Router();

router.get('/', function (req, res) {
  const publishers = nesGames.reduce((publishers, game) => {
    if (publishers.includes(game.publisher) || !game.publisher) {
      return publishers;
    }

    return [...publishers, game.publisher];
  }, []);

  const publishersJsonResult = { data: publishers.sort() };

  res.json(publishersJsonResult);
});

router.get('/:publisher', function (req, res) {
  const publisher = req.params.publisher;
  const gamesByPublisher = nesGames.filter(
    (games) => games.publisher === publisher
  );

  res.json({ data: gamesByPublisher });
});

module.exports = router;
