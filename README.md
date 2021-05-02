\# How to install and deploy the code
## Install serverless cli globally
Serverless framework (https://www.serverless.com/)
```sh
npm install -g serverless
```

## Add AWS credentials to serverless
```sh
serverless config credentials --provider aws --key 1234 --secret 5678
```

## Install npm packages locally
```sh
npm install
```

## Deploy the code in AWS
```sh
serverless deploy to deploy AWS Lambda
```
## To remove deployments from AWS
```sh
serverless remove
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

# Things to do

- Use Typescript instead of Javascript
- Package the code separately for each AWS Lambda functions
- Currently environment variables are stored in AWS Parameter store as the values are static. If passwords need to be rotated, it would
be good to use AWS Secrets Manager.
- Add test cases to three exercise files.
 