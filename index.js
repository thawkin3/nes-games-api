const express = require('express');

const gameRoutes = require('./routes/games.js');
const categoryRoutes = require('./routes/categories.js');
const publisherRoutes = require('./routes/publishers.js');
const developerRoutes = require('./routes/developers.js');
const releaseYearRoutes = require('./routes/releaseyears.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/games', gameRoutes);
app.use('/categories', categoryRoutes);
app.use('/publishers', publisherRoutes);
app.use('/developers', developerRoutes);
app.use('/releaseyears', releaseYearRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the NES Games API!');
});

app.listen(port, () => {
  console.log(`NES Games API listening at http://localhost:${port}`);
});
