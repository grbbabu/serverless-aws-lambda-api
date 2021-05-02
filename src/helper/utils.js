const formatResponse = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body, null, 2),
});

exports.formatResponse = formatResponse;
