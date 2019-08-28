# PhotoApp
This project was generated with React JS](https://reactjs.org/) version 16.9.0.

## Development server
To start the project:
Run `cd PhotoApp`.
Run `npm install` and then `npm start`.

`npm start` runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. 

## Dockerfile

After the command `npm run build`, run in a Bash terminal:
-> Run `docker build --file Dockerfile --tag taniafrade/hx-front .` to run the build with docker.
-> Run `docker run -p 80:80 taniafrade/hx-front` ro run the docker image.

## Running unit tests

Run `npm test` to execute the unit tests.
