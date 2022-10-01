<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) template project, it contains the Auth and Database configurations for postgresql.

## Define env file

Clone the **.env.template** file and rename to **.env**

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

POSTGRES_HOST=localhost // localhost for dev purpose
POSTGRES_PORT=5432 // default port for postresql

PORT=3000 // nest default port
HOST_API=http://localhost:3000/api // "/api" is the prefix configured in main.ts file

CONTAINER_NAME=dev-app
JWT_SECRET=
```

## Initialize Database

```bash
# initialize db configured in docker-compose file
$ docker compose up -d
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# for debugging: `ctrl + shift + p ` and type debug: toggle auto attach

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```