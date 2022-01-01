# NES Games API

This is a simple REST API built with Node and Express that returns metadata for every NES game ever published. Tests were written using Insomnia and the Inso CLI tool and are run as part of a continuous integration pipeline using GitHub Actions.

## Running the App Locally

1. `yarn install`
2. `yarn start`
3. Navigate to http://localhost:3000 in your browser

## Running the Tests Locally

`yarn test` to run the Insomnia test suite (Make sure you have the app running already in a separate terminal window. Otherwise, use `yarn ci:start-and-test` instead to start the app and run the tests all in one command.)

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

- `ci:start-and-test`: Concurrently starts the app and runs the unit tests (used as part of the GitHub Actions workflow for CI)
- `ci:test`: Waits for the app to be running locally on port 3000 and then runs the unit tests
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

### GitHub Actions

- What is GitHub Actions: https://resources.github.com/devops/tools/automation/actions
- GitHub Actions PDF: https://resources.github.com/downloads/What-is-GitHub.Actions_.Benefits-and-examples.pdf
- Quickstart for GitHub Actions: https://docs.github.com/en/actions/quickstart
- GitHub Actions for Building and Testing with Node.js: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python
- Node.js Starter Workflow: https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml
- Setup inso: https://github.com/marketplace/actions/setup-inso

### Other Libraries Used

- Express.js: https://expressjs.com/
- Prettier: https://prettier.io/
- on-change: https://www.npmjs.com/package/on-change
- wait-on: https://www.npmjs.com/package/wait-on
- concurrently: https://www.npmjs.com/package/concurrently

### NES Games

- NES Games Database: https://www.gamesdatabase.org/all_system_games-nintendo_nes
- NES Games Wikipedia: https://en.wikipedia.org/wiki/List_of_Nintendo_Entertainment_System_games
