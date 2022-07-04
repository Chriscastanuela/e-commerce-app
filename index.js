const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./schema');

const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');

const { categories, products, reviews } = require('./db');


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        categories,
        products,
        reviews
    }
});

server.listen().then(({url}) => console.log(`server is ready @ ${url}`));