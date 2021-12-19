const express = require('express');
const nesGames = require('../nes_games.json');

const router = express.Router();

router.get('/', function (req, res) {
  const categories = nesGames.reduce((categories, game) => {
    if (categories.includes(game.category) || !game.category) {
      return categories;
    }

    return [...categories, game.category];
  }, []);

  const categoriesJsonResult = { data: categories.sort() };

  res.json(categoriesJsonResult);
});

router.get('/:category', function (req, res) {
  const category = req.params.category;
  const gamesInCategory = nesGames.filter(
    (games) => games.category === category
  );

  res.json({ data: gamesInCategory });
});

module.exports = router;
