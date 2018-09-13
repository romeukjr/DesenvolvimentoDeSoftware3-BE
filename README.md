# BrowserBook - Back End
This project a simple prototype to expose an API to [another project](https://github.com/Arthuravila/BrowserBook/) which already has the front-end application.

## Installation

Make sure you have [MongoDB](https://www.mongodb.com/download-center), [Node.js and npm](https://nodejs.org/en/download/) installed.

Then, clone or download this repository, navigate to its root folder and run:

> npm install

## Running the Application in development server
To run this back-end application it is necessary to run mongodb, which is our database, and the server, which will expose our API.

### Openning MongoDB
First of all, start mongodb. To do so, go to the mongo installation folder and navigat to `MongoDB\<version>\bin`, then open two terminals.
In the first one, run:
> mongod

and in the second one:
> mongo

### Starting the server
To start the server, jus go to the repository root folder and run:
> node server.js
