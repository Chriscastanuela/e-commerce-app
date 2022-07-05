exports.Query = {
    hello: (parent, args, context) => 'world',
    products: (parent, { filter }, { db }) => {
        
        // console.log(db.reviews);

        let theProducts = db.products;

        if(filter) {
            const { onSale, averageRating } = filter;
            if (onSale) {
                theProducts = theProducts.filter(theProduct => theProduct.onSale);
            }
            if([1,2,3,4,5].includes(averageRating)) {
                theProducts = theProducts.filter(product => {
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

        return theProducts;

    },
    product: (parent, { id }, { db }) => db.products.find(theProduct => theProduct.id === id),
    categories: (parent, args, { db }) => db.categories,
    category: (parent, { id }, { db }) => db.categories.find(theCategory => theCategory.id === id)
};