# MeetUps

Meetups is an application to manage meetings, view them, create them, add them to favourites...

## ⚛️ Tech-stack

- [Create React App](https://github.com/facebook/create-react-app)
- [React](https://es.reactjs.org/)
- [React-Router-Dom](https://reactrouter.com/en/main)
- [Redux-toolkit](https://redux-toolkit.js.org/)


## 🚩 Tests

- [Redux-testing-library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)


## 🔁 About Redux

We have chosen to use redux to manage the global status of meetups created and added to favourites. 
It remains to be done that this global status is also stored with a system that makes it permanent (writing to file, connection with api...).

## Daily usage and deploying

In the project directory, you can run:

### `npm install`

To install the dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## To run the E2E tests
### `npm run cypress:open`
### `npm run cypress:run`

## To run the unit tests
### `npm run test`