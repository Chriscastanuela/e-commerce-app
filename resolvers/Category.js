exports.Category = {
    products: ({ id }, args, { products }) => products.filter(theProduct => id === theProduct.categoryId)
};