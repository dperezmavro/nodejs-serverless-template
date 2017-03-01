'use strict';

const util = require('util');

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  const options = {
      depth: null,
      maxArrayLength: null
  }

  console.log(util.inspect(event, options));
  callback(null, response);
};
