exports.Category = {

    products: ({ id }, { filter }, { db }) => {
        let filteredProducts = db.products;
        filteredProducts = filteredProducts.filter(theProduct => id === theProduct.categoryId);

        if(filter) {
            const { onSale, averageRating } = filter;
            if(onSale) filteredProducts = filteredProducts.filter(theProduct => theProduct.onSale);
            if([1,2,3,4,5].includes(averageRating)) {
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach(theReview => {
                        if(theReview.productId === product.id) {
                            sumRating += theReview.rating;
                            numberOfReviews++;
                        }
                    });
                    const averageProductRating = sumRating/numberOfReviews;
                    return averageProductRating >= averageRating;
                });
            }
        }

        return filteredProducts;
    }
};