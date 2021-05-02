const products = require("../../src/mocks/products");
const shoppingHistory = require("../../src/mocks/shoppingHistory");
const productCounts = require("../../src/mocks/productCounts");
const sortedPopularProducts = require("../../src/mocks/sortedPopularProducts");
const productsSortedByNameAsc = require("../../src/mocks/productsSortedByNameAsc");
const productsSortedByNameDesc = require("../../src/mocks/productsSortedByNameDesc");
const productsSortedByPriceAsc = require("../../src/mocks/productsSortedByPriceAsc");
const productsSortedByPriceDesc = require("../../src/mocks/productsSortedByPriceDesc");

const sort = require("../../src/helper/sort");

describe("Popular products :", () => {
  it("products vs counts : ", () => {
    expect(sort.getProductCount(shoppingHistory)).toEqual(productCounts);
  });

  it("sorted products by popularity : ", () => {
    const popularProducts = sort.sortByPopularity(products, sort.getProductCount(shoppingHistory));
    expect(popularProducts).toEqual(sortedPopularProducts);
  });

  it("sorted products by name in ascending order : ", () => {
    expect(sort.productNameAscending(products)).toEqual(productsSortedByNameAsc);
  });

  it("sorted products by name in descending order : ", () => {
    expect(sort.productNameDescending(products)).toEqual(productsSortedByNameDesc);
  });

  it("sorted products by price in ascending order : ", () => {
    expect(sort.productPriceAscending(products)).toEqual(productsSortedByPriceAsc);
  });

  it("sorted products by price in descending order : ", () => {
    expect(sort.productPriceDescending(products)).toEqual(productsSortedByPriceDesc);
  });
});
