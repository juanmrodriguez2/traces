## Installation

```bash
$ yarn install
$ brew install --cask docker
```

## Getting Started

- Get Postgres running locally (or run with docker using below command)

```bash
$ docker run --name mongodb -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=<username> \
-e MONGO_INITDB_ROOT_PASSWORD=<password> \
mongo
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Common tasks

### Creating a new migration

Run `yarn knex migrate:make <name>`. Make sure the migration successfully works with `yarn knex migrate:up` and `yarn knex migrate:down`

Database migrations are run automatically as part of the `yarn start` command.
