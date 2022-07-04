exports.Query = {
    hello: (parent, args, context) => 'world',
    products: (parent, { filter }, { products }) => {
        if(filter && filter.onSale === true) {
            return products.filter(theProduct => theProduct.onSale)
        } 
        return products;
    },
    product: (parent, { id }, { products }) => products.find(theProduct => theProduct.id === id),
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => categories.find(theCategory => theCategory.id === id)
};