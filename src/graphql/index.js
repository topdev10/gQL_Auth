const { ApolloServer } = require('apollo-server-express');
const dataSources = require('./dataSources');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

// server
//   .listen()
//   .then(({ url }) => console.log('Server is running on localhost:4000'))

module.exports = apolloServer;