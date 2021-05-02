"use strict";

const utils = require("../src/helper/utils");

module.exports.handler = async (event, context) => {
  const { API_ACCESS_TOKEN } = process.env;
  return utils.formatResponse(200, {
    name: "Ramesh Gopalakrishnan",
    token: API_ACCESS_TOKEN,
  });
};
