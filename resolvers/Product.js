exports.Product = {
    category: ({ categoryId }, args, { db }) => db.categories.find(theCategory => theCategory.id === categoryId),
    reviews: ({ id }, args, { db }) => db.reviews.filter(theReview => theReview.productId === id)
};