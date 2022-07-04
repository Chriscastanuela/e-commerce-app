exports.Query = {
    hello: (parent, args, context) => 'world',
    products: (parent, { filter }, { products, reviews }) => {

        let theProducts = products;

        if(filter) {
            const { onSale, averageRating } = filter;
            if (onSale) {
                theProducts = theProducts.filter(theProduct => theProduct.onSale);
            }
            if([1,2,3,4,5].includes(averageRating)) {
                theProducts = theProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(theReview => {
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
    product: (parent, { id }, { products }) => products.find(theProduct => theProduct.id === id),
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => categories.find(theCategory => theCategory.id === id)
};