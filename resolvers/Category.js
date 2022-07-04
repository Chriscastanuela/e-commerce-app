exports.Category = {

    products: ({ id }, { filter }, { products }) => {
        filteredProducts = products.filter(theProduct => id === theProduct.categoryId);
        if(filter && filter.onSale === true) {
            return filteredProducts.filter(theProduct => theProduct.onSale)
        } 
        return filteredProducts;
    }
};