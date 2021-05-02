"use strict";

const axios = require("axios");
const utils = require("../src/helper/utils");

module.exports.handler = async (event, context) => {
  const { TROLLEY_CALCULATOR_URL, API_ACCESS_TOKEN } = process.env;
  const bodyInput = JSON.parse(event.body);

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
    return utils.formatResponse(500, err);
  }
  
  return utils.formatResponse(200, total);
};
