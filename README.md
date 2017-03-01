# About

This is a bootstrap serverless template, with out-of-the-box support for testing, transpiling and deploying to AWS.

# Usage

To make the project, run `npm run-script make`. This will create the `build/` directory, with the code transpiled with babel to run on AWS's node version (4.3 as of this writing).

To deploy the project do `npm run-script deploy`. This will run the tests found in `test/`, transpile and then run `sls deploy` on the result. It is assumed that you have configure `serverless` with your AWS credentials and that it works. 

# TODO

When you download this, remember to edit `serverless.yml` with your specifics.
