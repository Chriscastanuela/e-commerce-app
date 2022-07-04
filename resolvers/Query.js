const { products, categories } = require('../db');

exports.Query = {
    hello: () => 'world',
    products: () => products,
    product: (parent, args, context) => products.find(theProduct => theProduct.id === args.id),
    categories: () => categories,
    category: (parent, args, context) => categories.find(theCategory => theCategory.id === args.id)
};