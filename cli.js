#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const packageJson = require('./package.json');

// Grab args
const [,, ...args] = process.argv

// Set appname - default name is 'basic-app'
const appname = (args[0] === undefined) ? 'basic-app' : args[0]

// Starting Project Generation
console.log(`Initializing project ${appname} ...`);

// Make directory called 'appname' and change dir to 'appname'
if(!fs.existsSync(appname))
  fs.mkdirSync(appname);
process.chdir('./' + appname);

// Copy files from basic-react-app to new app 
const files = ['.babelrc', '.gitignore', 'package.json', 'package-lock.json', 'README.md', 'webpack.config.js'];
files.forEach((file) => {
  fs.copy(path.join(__dirname, file), file, () => {});
})
fs.copy(path.join(__dirname, './src'), './src', () => {})

