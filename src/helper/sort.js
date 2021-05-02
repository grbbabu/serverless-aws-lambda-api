// const products = require("../mocks/products");
// const shoppingHistory = require("../mocks/shoppingHistory");
const R = require("ramda");

const getProductCount = (shoppingHistory) => {
  const productCount = shoppingHistory
    .map((s) => s.products)
    .flatMap((p) => p)
    .reduce((acc, curr) => {
      if (acc[curr.name]) {
        return { ...acc, [curr.name]: acc[curr.name] + curr.quantity };
      } else {
        return { ...acc, [curr.name]: curr.quantity };
      }
    }, {});
  return productCount;
};

const sortByPopularity = (products, productCounts) => {
  return [...products].sort((p1, p2) => {
    return (productCounts[p2.name] || 0) - (productCounts[p1.name] || 0);
  });
};

const productNameAscending = R.sortWith([R.ascend(R.prop("name"))]);

const productNameDescending = R.sortWith([R.descend(R.prop("name"))]);

const productPriceAscending = R.sortWith([R.ascend(R.prop("price"))]);

const productPriceDescending = R.sortWith([R.descend(R.prop("price"))]);

// const productsAscByName = productNameAscending(products);
// const productsDescByName = productNameDescending(products);
// const productsAscByPrice = productPriceAscending(products);
// const productsDescByPrice = productPriceDescending(products);

exports.getProductCount = getProductCount;
exports.sortByPopularity = sortByPopularity;
exports.productNameAscending = productNameAscending;
exports.productNameDescending = productNameDescending;
exports.productPriceAscending = productPriceAscending;
exports.productPriceDescending = productPriceDescending;
