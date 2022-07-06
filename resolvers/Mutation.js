const { v4:uuid } = require('uuid');
const { db } = require('../db');

exports.Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name
        };
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { db }) => {
        const {
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        } = input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        }
        db.products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, { input }, { db }) => {
        const {
            title,
            comment,
            rating,
            date,
            productId
        } = input;
        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }
        db.reviews.push(newReview);
        return newReview
    },
    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter(cat => cat.id !== id);
        db.products = db.products.map(prod => {
            if(prod.categoryId === id) return {
                ...prod,
                categoryId:null
            }
            else return prod
        })
        return true;
    },
    deleteProduct: (parent, { id }, { db }) => {
        const theProduct = db.products.find(prod => prod.id === id);
        db.products = db.products.filter(prod => prod.id !== theProduct.id);
        db.reviews = db.reviews.filter(review => review.productId !== theProduct.id);
        return true;
    },
    deleteReview: (parent, { id }, { db } ) => {
        db.reviews = db.reviews.filter(review => review.id !== id);
        return true;
    },
    updateCategory: (parent, { id, input }, { db }) => {
        const index = db.categories.findIndex(cat => cat.id === id);
        if(index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        }
        return db.categories[index];
    },
    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex(prod => prod.id === id);
        if(index === -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        }
        return db.products[index];
    },
    updateReview: (parent, { id, input }, { db }) => {
        const index = db.reviews.findIndex(cat => cat.id === id);
        if(index === -1) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        }
        return db.reviews[index];
    }
}