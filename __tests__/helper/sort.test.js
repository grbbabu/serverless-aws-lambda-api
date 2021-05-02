const products = require("../../mocks/products");
const shoppingHistory = require("../../mocks/shoppingHistory");
const productCounts = require("../../mocks/productCounts");
const sortedPopularProducts = require("../../mocks/sortedPopularProducts");
const productsSortedByNameAsc = require("../../mocks/productsSortedByNameAsc");
const productsSortedByNameDesc = require("../../mocks/productsSortedByNameDesc");
const productsSortedByPriceAsc = require("../../mocks/productsSortedByPriceAsc");
const productsSortedByPriceDesc = require("../../mocks/productsSortedByPriceDesc");

const sort = require("../../src/helper/sort");


describe('getProductCount', () => {
  it("should return aggregate product count qunatities from shopping history in an object", () => {
    expect(sort.getProductCount(shoppingHistory)).toEqual(productCounts);
  });

});

describe("Products should be", () => {
  it("sorted by popularity correctly", () => {
    const popularProducts = sort.sortByPopularity(products, sort.getProductCount(shoppingHistory));
    expect(popularProducts).toEqual(sortedPopularProducts);
  });

  it("sorted by name in ascending order correctly", () => {
    expect(sort.productNameAscending(products)).toEqual(productsSortedByNameAsc);
  });

  it("sorted by name in descending order correctly", () => {
    expect(sort.productNameDescending(products)).toEqual(productsSortedByNameDesc);
  });

  it("sorted by price in ascending order correctly", () => {
    expect(sort.productPriceAscending(products)).toEqual(productsSortedByPriceAsc);
  });

  it("sorted by price in descending order correctly", () => {
    expect(sort.productPriceDescending(products)).toEqual(productsSortedByPriceDesc);
  });
});


