# kiddom-frontend

# Download

    git clone git@github.com:kiddom/kiddom-frontend.git
    cd kiddom-frontend

# Project Structure

    <PROJECT_ROOT>/
      app/
      .... assets/
      .... .... images/
      .... .... styles/   <- .LESS files go here
      .... .... scripts/  <- .coffee files go here
      .... views/         <- jade files, which build to HTML, go here
      .bowerrc
      .editorconfig
      .gitignore
      defaults.json       <- default configuration for grunt tasks
      Gruntfile.coffee    <- grunt tasks definition module
      package.json        <- npm package definition

# Setup

## Define `.env`

    cp .env.template .env
    # ... go configure your environment

## Install dependencies

    npm install
    bower install

## Adding new dependencies?

`npm install --save|--save-dev foobar`

This locally installs the package 'foobar', and adds a line
to `package.json` so it is installed by anyone else who runs the code.

Learn about [--save vs --save-dev](http://stackoverflow.com/a/31358981/311901)

## Start development server

    npm run develop

## Also Try (if npm run develop fails)

		grunt serve

This simultaniously starts a webserver at localhost:$PORT serving
from `dist/app/`, and watches for changes to `app/assets` and `app/views`.

