"use strict";

const axios = require("axios");

module.exports.handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const TROLLEY_CALCULATOR_URL = process.env.TROLLEY_CALCULATOR_URL;
  const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
  console.log('process.env : ', JSON.stringify(process.env));
  const bodyInput = JSON.parse(event.body);
  console.log("bodyInput : ", JSON.stringify(bodyInput));

  let total = 0;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const resp = await axios.post(`${TROLLEY_CALCULATOR_URL}?token=${API_ACCESS_TOKEN}`, bodyInput, options);
    total = resp.data;
    console.log(`total : ${total}`);
  } catch (err) {
    console.error("Failed in trolley calculator post call", JSON.stringify(err));
    return {
      statusCode: 500,
      body: JSON.stringify(err, null, 2),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(total, null, 2),
  };
};
