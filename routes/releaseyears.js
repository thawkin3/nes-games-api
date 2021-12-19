const express = require('express');
const nesGames = require('../nes_games.json');

const router = express.Router();

router.get('/', function (req, res) {
  const releaseYears = nesGames.reduce((releaseYears, game) => {
    if (releaseYears.includes(game.releaseYear) || !game.releaseYear) {
      return releaseYears;
    }

    return [...releaseYears, game.releaseYear];
  }, []);

  const releaseYearsJsonResult = { data: releaseYears.sort() };

  res.json(releaseYearsJsonResult);
});

router.get('/:releaseYear', function (req, res) {
  const releaseYear = req.params.releaseYear;
  const gamesReleasedInYear = nesGames.filter(
    (games) => String(games.releaseYear) === releaseYear
  );

  res.json({ data: gamesReleasedInYear });
});

module.exports = router;
