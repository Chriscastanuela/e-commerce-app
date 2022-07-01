

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "World!";
        },
        numberOfAnimals: () => 55
    }
}

const server = new ApolloServer(
    {
        typeDefs,
        resolvers
    }
);

server.listen().then(({url}) => {
    console.log(`server is ready @ ${url}`);
});