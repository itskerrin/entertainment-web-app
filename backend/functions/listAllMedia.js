'use strict';
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const listAllMedia = async () => {
  const TABLE = 'entertainment-movie-app';

  const params = {
    TableName: TABLE,
  };

  const response = await dynamoClient
    .scan(params)
    .promise()
    .catch((error) => console.log(error));

  return response.Items;
};

module.exports = listAllMedia;
