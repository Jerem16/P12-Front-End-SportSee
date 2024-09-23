# P12-Front-End-SportSee Tableau de Bord d'Analytics SportSee

## Description du Projet

Ce projet consiste à développer une nouvelle page profil pour le site de **SportSee**, une startup dédiée au coaching sportif. L'objectif est de permettre aux utilisateurs de suivre leurs performances sportives, telles que le nombre de sessions réalisées et les calories brûlées.

Le projet inclut l'intégration de graphiques et de diagrammes interactifs pour visualiser les données d'analyse sportive, ainsi que la récupération des données via une API dédiée.

## Fonctionnalités

-   Affichage d'un tableau de bord utilisateur pour suivre l'activité sportive.
-   Intégration de graphiques avancés avec des bibliothèques comme **Recharts** ou **D3.js**.
-   Récupération de données depuis une API via **Fetch** ou **Axios**.
-   Standardisation des données provenant de l'API avant leur utilisation dans l'interface.
-   Documentation complète du projet avec **JSDoc**, **Proptypes** et **README**.

## Technologies Utilisées

-   **React** : pour la création de l'interface utilisateur.
-   **Recharts** ou **D3.js** : pour l'affichage de graphiques et de diagrammes.
-   **Axios** ou **Fetch** : pour la gestion des appels HTTP à l'API.
-   **Sass** : pour la gestion des styles et de la mise en page.
-   **Node.js** (backend fourni pour les appels API).

## Prérequis

-   Node.js (version 14 ou supérieure)
-   npm (version 6 ou supérieure)
-   yarn

## Installation

1. Clonez le projet depuis le dépôt Git :

    ```
    git clone https://github.com/Jerem16/P12-Front-End-SportSee.git
    ```

    ```
    npm i
    ```

    For : Deprecation The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.

    ```
    yarn global add sass
    ```

    ```
    yarn install
    ```

    ```
    ! choose "@babel/plugin-syntax-flow" Version : 7.14.5
    ```

## Comment lancer l'application en local ?

### étape 1 - Lancer le backend :

    git clone https://github.com/OpenClassrooms-Student-Center/SportSee

Suivez les indications dans le README du projet backend.

### étape 2 - Lancer le frontend :

### `npm start` || ### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Recharts Documentation

You can learn more in the [Recharts documentation](https://recharts.org/en-US/examples).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
