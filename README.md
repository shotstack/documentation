# Shotstack Documentation

Documentation for the Shotstack video editing API: https://shotstack.io/docs/guide/

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
yarn deploy
```

Website is build and deployed to S3, as part of main web site with the `docs/guides` directory. Deployment requires AWS
cli and credentials.
