# Cypress Tests - Page Object Example
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project presents the approximate test framework which can be used for E2E tests using `JS` + `Cypress`.

The tests created for a simple React form:

![React form](https://user-images.githubusercontent.com/56598375/143472169-8e653940-4394-474f-b96d-89f283264edc.png)



## :hammer_and_wrench: Tech stack:
* React
* Vanilla JS
* CSS
* HTML
* Yarn
* Cypress

## :rocket: How to run:

### To start the application
1. Install yarn dependencies (Make sure you run Node 15.9 or higher):

```sh
yarn install
```

2. Launch project in the dev mode:

```sh
yarn start
```
Application will run on `localhost:3000`
    
### To run Cypress tests
1. To run tests with browser:
```sh
cypress open
```

2. To run tests in a headless mode:
```sh
cypress run
```

3. To run tests in a specific browser please provide `browser` flag:
```sh
cypress run --browser firefox
```

## :repeat: CI Integration 
Tests are included to the continuous integration process with GitHub Actions

## :bulb: To do:

- [x] CI integration
- [ ] Run tests in parallel 
- [ ] Conduct snapshot testing
