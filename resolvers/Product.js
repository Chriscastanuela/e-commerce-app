const { categories } = require('../db');

exports.Product = {
    category: (parent, args, context) => categories.find(theCategory => theCategory.id === parent.categoryId)
};