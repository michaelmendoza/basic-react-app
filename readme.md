
# basic-react-app

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Basic React App is a cli tool for generating a basic react applciation. This app supports react v16.6, react-router v4, babel v7 and webpack v4. Webpack is configured with babel loaders for bundling react, modern javascript (ES6), css, sass, and image files for development and production.

## Quick Start

Clone source code from the github repo

``` git clone https://github.com/michaelmendoza/basic-react-app.git ```

Link the project using npm

``` npm link ```

Generate a react app into `appname` folder

```basic-react-app appname```

Then install npm dependencies 

```cd appname; npm install```

For development use `npm run dev` to run your app with a dev server on http://localhost:8080.
For production use `npm run build` to create a minified bundled javascript file in `dist` folder.

## Architecture Overview

After install, running `basic-react-app appname` will create a directory called `appname` inside the current folder. Inside that folder, the app will generate the basic project structure.

```
appname
  |- /src
    |- index.js       // Entry point for javascript
    |- index.html     // App entry point 
    |- App.jsx        // App Layout
    |- assets         // Folder for images and assets
    |- components     // Folder for react jsx components
    |- containers     // Folder for react-router jsx pages  
    |- stores         // Folder for data stores
    |- styles         // Folder for css and sass stylesheets
  |- package.json     // NPM config file
  |- webpack.config   // Webpack config file
  |- .gitignore       // Git ignore
  |- .babelrc         // Babel config file
  |- /dist            // Folder where webpack bundles apps
  ```

## What's Included?

Your project environment will include everything you need for a basic react application including:

* React, JSX, ES6
* CSS, SASS
* React Router v4, Material-UI 
* Webpack script using Babel to bundle JS, JSX, CSS, SASS and Image files for production 
* Webpack Development Server 

## Why use Basic React App?

Basic React App is great for:

* Learning React
* Starting Simple SPA React Applications
* Creating simple examples for React

### Popular Alternatives

* Create React App
* Simple React App

## References 

* https://github.com/facebook/create-react-app
* https://github.com/Kornil/simple-react-app
* https://github.com/rwieruch/minimal-react-webpack-babel-setup
* https://webpack.js.org/guides/getting-started/
* https://www.valentinog.com/blog/react-webpack-babel/
* https://reacttraining.com/react-router/web/guides/quick-start
* https://alligator.io/react/index-js-public-interfaces/
* https://github.com/mui-org/material-ui
* https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e
