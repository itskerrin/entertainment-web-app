'use strict';
const listAllMedia = require('./functions/listAllMedia');

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

/**
 * @param event
 * @param context
 * @param callback
 * @returns http response
 */

const listMedia = async (event, context, callback) => {
  try {
    callback(null, getResponse(await listAllMedia(), 200));
  } catch (err) {
    console.log(err);
    callback(null, getResponse('Error', 500));
  }
};

function isTestMode(event) {
  let testing = false;
  if (event && event.hasOwnProperty('runPhase')) {
    testing = event.runPhase === 'TEST';
  }
  return testing;
}

function getResponse(body, statusCode) {
  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(body),
    headers: HEADERS,
  };
}

module.exports = {
  listMedia,
};
