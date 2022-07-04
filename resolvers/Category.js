const { products } = require('../db');

exports.Category = {
    products: (parent, args, context) => products.filter(theProduct => parent.id === theProduct.categoryId)
};