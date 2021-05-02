"use strict";

module.exports.handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
  console.log('API_ACCESS_TOKEN : ', API_ACCESS_TOKEN);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: "Ramesh Gopalakrishnan",
        token: API_ACCESS_TOKEN,
      },
      null,
      2
    ),
  };
};
