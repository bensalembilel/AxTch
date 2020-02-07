# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Heroku deploy 
### Create heroku-postbuild script in package.json
  `"heroku-postbuild": "ng build --prod"`
### Add Node and NPM engines  
    "engines": {
    "node": "6.11.0",
    "npm": "3.10.10"
    }
### Create a server.js file in the root
server.js :
    ` const express = require('express');
    
    const path = require('path');
    
    const app = express();
    
    app.use(express.static(__dirname + '/dist/<name-of-app>'));
    
    app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
    
    });
    
    app.listen(process.env.PORT || 8080);
    
### update start command in package.json
    `"start": "node server.js"`
