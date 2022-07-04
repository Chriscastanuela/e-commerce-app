exports.Product = {
    category: ({ categoryId }, args, { categories }) => categories.find(theCategory => theCategory.id === categoryId),
    reviews: ({ id }, args, { reviews }) => reviews.filter(theReview => theReview.productId === id)
};