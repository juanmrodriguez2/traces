## Problem solution strategy

To problem solution is based on a nest.js solution, a postgres database, using the following tools/frameworks/plugins:

* Npm
* Knex
* Migrations
* Docker
* Yup
* Axios
* OpenAPI
* Jest
* Google cloud

# Data structure
To store the statistics data I decided to create two tables:

```
CountryStats
* code varchar
* name varchar
* occurrences bigint
```
Responsible for store for each country the occurrences of the requested traces.

```
LargestDistance
* code varchar
* name varchar
* distance numeric
```
Responsible for store the largest trace requested distance.

This two tables were designed to avoid massive data storage and fast queries responses.
Taking care about the concurrency problems transactions should be implemented to avoid data inconsistencies.

# Production

The swagger of the api is exposed in the following link:
https://web-pwe22ug2ga-uc.a.run.app/

# Development

## Installation

```bash
$ npm install
$ brew install --cask docker
$ brew install --cask google-cloud-sdk
```

## Getting Started

Get Postgres running locally (or run with docker using below command)

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=****** -p 5432:5432 -d postgres:14
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#update database to latest version
$ npm run migrate:latest
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

## Common tasks

### Build docker image

```bash
docker build -t nest-cloud-run .
```

### Run docker image locally

```bash
docker run -p80:3000 nest-cloud-run
```

# Possible improvements

* Use cache when the application is requesting the Fixer API.
* Implement unit tests.
* Implement end-to-end tests.
* Integrate GitHub Actions to solve the CI/CD.
* Define a Git strategy (like Gitflow).
