# O.A.R.S.

Group project for Row Coaching. Building this ExpressJS API was part of the real-world projects of Codaisseur Academy. 
The front-end for this API can be found [here](https://github.com/LiannevW/O.A.R.S.): 

## Project summary
With OARS the coach can monitor gps, speed and stroke information of a certain training. 
The data sends from a tablet device and will load automatically on the web app. 
The app is there to render and store the information of each training so the coach has an overview of the past trainings and, 
the improvements and changes in performances his pupils are making.

## Setup
This project uses ExpressJS in combination with a mySQL database. 
We used Sequelize as an ORM and yarn for dependency management.

```bash
to setup the project:
$ git clone git@github.com:nojas01/oars-api.git
$ cd oars-api
$ yarn install
```

```bash
to setup the database with seed data run:
$ node_modules/.bin/sequelize db:create
$ node_modules/.bin/sequelize db:migr/ate
$ node_modules/.bin/sequelize db:seed
```
