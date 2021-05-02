"use strict";

const axios = require("axios");
const sort = require("../src/helper/sort");
const utils = require("../src/helper/utils");

const handler = async (event, context) => {
  const { sortOption } = event.queryStringParameters;
  const { SHOPPING_HISTORY_URL, API_ACCESS_TOKEN, PRODUCTS_URL } = process.env;

  let products = null;
  try {
    const productsUrl = `${PRODUCTS_URL}?token=${API_ACCESS_TOKEN}`;
    const resp = await axios.get(productsUrl);
    products = resp.data;

    console.log("products : ", products);
  } catch (err) {
    console.error(`Error : ${err}`);
    return utils.formatResponse(500, "Unable to fetch data from products resource.");
  }

  let shoppingHistory = null;
  try {
    const shoppingHistoryUrl = `${SHOPPING_HISTORY_URL}?token=${API_ACCESS_TOKEN}`;
    const resp = await axios.get(shoppingHistoryUrl);
    shoppingHistory = resp.data;

    console.log(`shoppingHistory : ${JSON.stringify(shoppingHistory)}`);
  } catch (err) {
    console.error(`Error : ${err}`);
    return utils.formatResponse(500, "Unable to fetch data from shopping history resource.");
  }

  switch (sortOption) {
    case "Recommended":
      const productCount = sort.getProductCount(shoppingHistory);
      const recommendedProducts = sort.sortByPopularity(products, productCount);
      console.log("recommendedProducts : ", recommendedProducts);
      return utils.formatResponse(200, recommendedProducts);
    case "Low":
      const lowToHigh = sort.productPriceAscending(products);
      console.log("lowToHigh : ", lowToHigh);
      return utils.formatResponse(200, lowToHigh);
    case "High":
      const highToLow = sort.productPriceDescending(products);
      console.log("highToLow : ", highToLow);
      return utils.formatResponse(200, highToLow);
    case "Ascending":
      const nameAscending = sort.productNameAscending(products);
      console.log("nameAscending :", nameAscending);
      return utils.formatResponse(200, nameAscending);
    case "Descending":
      const nameDescending = sort.productNameDescending(products);
      console.log("nameDescending : ", nameDescending);
      return utils.formatResponse(200, nameDescending);
    default:
      console.log("Invalid query params");
      return utils.formatResponse(422, "Unprocessable entity");
  }
};

module.exports.handler = handler;
