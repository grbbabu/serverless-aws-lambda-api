# How to install and deploy the code

## Install serverless cli globally

Serverless framework (https://www.serverless.com/)

```sh
npm install -g serverless
```

## Add AWS credentials to serverless

```sh
serverless config credentials --provider aws --key <Your Key> --secret <Your Secret Key>
```

## Install npm packages locally

```sh
npm install
```

## Deploy the code in AWS

```sh
npm run deploy
```

## To remove deployments from AWS

```sh
npm run remove
```

## To run unit testing locally

```sh
npm test
```

## To generate unit testing coverage report

Run the command in the local setup

```sh
npm run coverage
```

## Things to do

- Use Typescript instead of Javascript
- Package the code separately for each AWS Lambda functions
- Currently environment variables are stored in AWS Parameter store as the values are static. If passwords need to be rotated, it would be better to use AWS Secrets Manager.