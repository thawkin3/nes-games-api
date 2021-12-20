# NES Games API

This is a simple REST API built with Node and Express that returns metadata for every NES game ever published. Tests were written using Insomnia and the Inso CLI tool.

## Running the App Locally

1. `yarn install`
2. `yarn start`
3. Navigate to http://localhost:3000 in your browser

## Running the Tests Locally

`yarn test` to run the Insomnia test suite

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

## NPM Scripts

- `format`: Formats the code using Prettier
- `format-watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app locally with a Node Express.js server running on port 3000
- `test`: Runs the Insomnia test suite

## Resources

### Insomnia and Inso CLI

- Insomnia Docs: https://docs.insomnia.rest/
- Inso CLI Docs: https://docs.insomnia.rest/inso-cli/introduction
- Inso CLI GitHub: https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso
- Design Documents: https://docs.insomnia.rest/insomnia/design-documents
- Unit Testing: https://docs.insomnia.rest/insomnia/unit-testing
- Git Sync: https://docs.insomnia.rest/insomnia/git-sync
- Inso Run Test: https://docs.insomnia.rest/inso-cli/cli-command-reference/inso-run-test
- Continuous Integration: https://docs.insomnia.rest/inso-cli/continuous-integration

### Express

- Express.js: https://expressjs.com/

### NES Games

- NES Games Database: https://www.gamesdatabase.org/all_system_games-nintendo_nes
- NES Games Wikipedia: https://en.wikipedia.org/wiki/List_of_Nintendo_Entertainment_System_games
