"use strict";

const axios = require("axios");
const sort = require("../src/helper/sort");

const handler = async (event, context) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const { sortOption } = event.queryStringParameters;
  const SHOPPING_HISTORY_URL = process.env.SHOPPING_HISTORY_URL;
  const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
  const PRODUCTS_URL = process.env.PRODUCTS_URL;
  console.log('process.env : ', JSON.stringify(process.env));
  let products = null;
  try {
    const productsUrl = `${PRODUCTS_URL}?token=${API_ACCESS_TOKEN}`;
    const resp = await axios.get(productsUrl);
    products = resp.data;

    console.log("products : ", products);
  } catch (err) {
    console.error(`Error : ${err}`);
    return {
      statusCode: 500,
      body: "Unable to fetch data from products resource.",
    };
  }

  let shoppingHistory = null;
  try {
    const shoppingHistoryUrl = `${SHOPPING_HISTORY_URL}?token=${API_ACCESS_TOKEN}`;
    const resp = await axios.get(shoppingHistoryUrl);
    shoppingHistory = resp.data;

    console.log(`shoppingHistory : ${JSON.stringify(shoppingHistory)}`);
  } catch (err) {
    console.error(`Error : ${err}`);
    return {
      statusCode: 500,
      body: "Unable to fetch data from shopping history resource.",
    };
  }

  switch (sortOption) {
    case "Recommended":
      const productCount = sort.getProductCount(shoppingHistory);
      const recommendedProducts = sort.sortByPopularity(products, productCount);
      console.log("recommendedProducts : ", recommendedProducts);
      return {
        statusCode: 200,
        body: JSON.stringify(recommendedProducts, null, 2),
      };
    case "Low":
      const lowToHigh = sort.productPriceAscending(products);
      console.log("lowToHigh : ", lowToHigh);
      return {
        statusCode: 200,
        body: JSON.stringify(lowToHigh, null, 2),
      };
    case "High":
      const highToLow = sort.productPriceDescending(products);
      console.log("highToLow : ", highToLow);
      return {
        statusCode: 200,
        body: JSON.stringify(highToLow, null, 2),
      };
    case "Ascending":
      const nameAscending = sort.productNameAscending(products);
      console.log("nameAscending :", nameAscending);
      return {
        statusCode: 200,
        body: JSON.stringify(nameAscending, null, 2),
      };
    case "Descending":
      const nameDescending = sort.productNameDescending(products);
      console.log("nameDescending : ", nameDescending);
      return {
        statusCode: 200,
        body: JSON.stringify(nameDescending, null, 2),
      };
    default:
      console.log("Invalid query params");
      return {
        statusCode: 422,
        body: JSON.stringify("Unprocessable entity", null, 2),
      };
  }
};

module.exports.handler = handler;
