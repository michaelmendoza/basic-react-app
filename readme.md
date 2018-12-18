
# basic-react-app

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Basic React App is a react app generator. This app supports react, react-router 4, babel7 and webpack. Webpack is configured with babel with loaders for react, modern javascript (ES.Next), css, sass, and image files.

## Quick Start

Clone source code from the github repo

``` git clone https://github.com/Kornil/simple-react-app.git ```

Link the project using npm

``` npm link ```

Run `basic-react-app appname` to generate a react app into `appname` folder. 
Then run the following to run your app on http://localhost:8080 

``` 
cd appname
npm install
npm run dev
```

When you are ready for production, create minified bundle with `npm run build`.

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
* Webpack script using Babel to bundle JS, JSX, CSS, SASS and Images for production 
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
