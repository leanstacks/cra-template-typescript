# Getting Started with Create React App

## About

This project was bootstrapped with the [Create React App](https://github.com/facebook/create-react-app) template [@leanstacks/typescript](https://github.com/leanstacks/cra-template-typescript).

The technology stack includes:

- Create React App - the foundation
- React Router Dom - routing
- React Query - data manipulation and caching
- Axios - http client
- Formik - form management
- Yup - validation
- Tailwind - styling
- Font Awesome - icons
- React Spring - animation
- Lodash - utility functions
- DayJS - date utility functions
- Testing Library React - tests
- MSW - API mocking
- TypeScript

## Getting Started

After creating the project, perform the following steps.

### `.nvmrc`

Update the `.nvmrc` file to your desired version of Node.js.

### `package.json`

When CRA creates a new React project from a template, it prefixes all dependencies in the `package.json` file with a caret `^`.  We recommend removing the caret symbol from all dependencies, this pinning the dependency to the specific version listed in `package.json`.

### (Re)initialize Dependencies

After updating the `.nvmrc` or `package.json` files, reinstall the project dependencies.

```shell
npm ci
```

### Code Formatting

The project includes a configuration file for the [Prettier](https://prettier.io/docs/en/configuration.html) code formatter. This allows all project contributors to share the same code formatting rules.

Adjust the Prettier configuration as desired.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:ci`

Executes the test runner in `CI` mode and produces a coverage report. With `CI` mode enabled, the test runner executes all tests one time and prints a summary report to the console. A code coverage report is printed to the console immediately following the test summary.

A detailed test coverage report is created in the `./coverage` directory.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

> **WARNING:** this is a one-way operation. Once you `eject`, you can’t go back!

> **TIP:** if you are thinking of ejecting, consider using [`craco`](https://craco.js.org/) instead.

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
