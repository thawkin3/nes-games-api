# NES Games API

This is a simple API built with Node and Express that returns metadata for every NES game ever published.

## Running the app locally

1. `yarn install`
2. `yarn start`

Navigate to http://localhost:3000 in your browser

## Available Endpoints

- `/`
- `/games`
- `/games/:gameId`
- `/categories`
- `/categories/:category`
- `/developers`
- `/developers/:developer`
- `/publishers`
- `/publishers/:publisher`
- `/releaseyears`
- `/releaseyears/:releaseYear`

## Resources

- https://expressjs.com/
- https://www.gamesdatabase.org/all_system_games-nintendo_nes
- https://en.wikipedia.org/wiki/List_of_Nintendo_Entertainment_System_games
