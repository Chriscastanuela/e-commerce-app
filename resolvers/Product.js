exports.Product = {
    category: ({ categoryId }, args, { categories }) => categories.find(theCategory => theCategory.id === categoryId)
};