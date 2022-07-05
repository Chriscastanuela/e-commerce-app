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
    }
}