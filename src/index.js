// src/index.js

const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('../models')

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
})

// server
//   .listen()
//   .then(({ url }) => console.log('Server is running on localhost:4000'))

module.exports = apolloServer