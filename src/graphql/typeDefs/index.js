const { gql } = require('apollo-server-express');

const { DateTime } = require('../customScalars');

const typeDefs = gql `
    scalar DateTime

    type User {
        id: Int!
        username: String!
        password: String!
    }

    type AuthResponse {
        id: Int
        username: String
        password: String
        createdAt: DateTime
        updatedAt: DateTime
    }

    type Query {
        authenticate(username: String!, password: String!): AuthResponse
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
    }
`

module.exports = [
    typeDefs
]