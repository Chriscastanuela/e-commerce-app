const { products, categories } = require('../db');

exports.Query = {
    hello: (parent, args, context) => 'world',
    products: (parent, args, { products }) => products,
    product: (parent, { id }, { products }) => products.find(theProduct => theProduct.id === id),
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => categories.find(theCategory => theCategory.id === id)
};