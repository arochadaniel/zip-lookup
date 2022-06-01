# Zip lookup full stack app

This application handles the lookup of zip codes of your selected country. The API to get the zip code info is [Zippopotam](http://www.zippopotam.us/).

## Backend

The backend was built with Node.js, TypeScript and Apollo GraphQL. Inside the modules folder you will find a `features` folder where the app business logic is handled, and a `graphql` folder where all the resolvers, types and the complete GraphQL schema of the application exist.

All tests are inside each spec folder in each feature.

To run the tests, run in the terminal `npm test`

## Frontend

The frontend was built with React.js, TypeScript, Apollo GraphQL and MUI. The project was initially created with CRA. Inside the modules folder you will find a `features` folder where all the business logic is handled, a `core` folder where all the necessary tecnologies for the application to work are located, and a `testing` folder where all the testing utils and base components are located.

For the countries selection, I used the [REST Countries API](https://restcountries.com/).

All tests are inside each spec folder in each feature.

To run the tests, run in the terminal `npm test`

## Start the application

To start the application, first you need to install the dependencies in the `backend` and `frontend` folders with `npm install`.

Then, in one terminal enter the `backend` folder and run `npm start`.

After that, in another terminal enter the `frontend` folder and run `npm start`.

With both servers running, you can test the application frontend in your [browser](http://localhost:3000), or you can query the server directly via Apollo in your [browser](http://localhost:4000).

## To improve

This application was built in less than 2 days, so there are areas where it can improve such as:

- Encapsulation: importing directly from the dependency packages can be detrimental for the app in the future, so is better to encapsulate the imports, and create ports to adapt into your application. This way, when the packages do breaking updates, adapting to the changes can be very simple, and, if in the future you want to change packages, you are not vendor-locked into these packages.

- Environment variables: env variables like the backend URI or the zip codes API URI, should be inside environment variables, and if there is sensitive data, inside secrets.

- UI/UX: the UI/UX of the application is really simple, it has just what is needed to function. With more time I could add animations, a dark mode, a navigation bar, etc.

- Feedback: the user feedback is really simple, just messages of success, failure and loading spinners. With more time, I could add snackbars, improved messages, confirmation dialogs, and more.

- Zip codes API: Zippopotam is a really old api. If you search for a non existing country/zipcode, it throws an error. I had to handle this error with no specific messages from the API inside the controller. Maybe changing to another well-mantained zip code api could improve things.
