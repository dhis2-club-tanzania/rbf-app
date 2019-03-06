[![Build Status](https://travis-ci.org/hisptz/ngx-seed-app.svg?branch=master)](https://travis-ci.org/hisptz/ngx-seed-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/dbe97dbdfbd55344c38f/maintainability)](https://codeclimate.com/github/hisptz/ngx-seed-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dbe97dbdfbd55344c38f/test_coverage)](https://codeclimate.com/github/hisptz/ngx-seed-app/test_coverage)

# Angular DHIS2 based seed app

Boilerplate codes to fast track developing DHIS2 applications based on Angular framework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Setup

Run `npm install` to install all required dependencies for the app

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

This command will require proxy-config.json file available in the root of your source code, usually this file has this format

```
{
  "/api": {
    "target": "https://play.dhis2.org/2.29/",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  },
  "/": {
    "target": "https://play.dhis2.org/2.29/",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  }
}

```

We have provided `proxy-config.example.json` file as an example, make a copy and rename to `proxy-config.json`

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/`, this will included a zip file ready for deploying to any DHIS2 instance.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
