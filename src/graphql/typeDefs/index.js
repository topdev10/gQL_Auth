const { gql } = require('apollo-server-express')

const typeDefs = gql `
    type User {
        id: Int!
        username: String!
        password: String!
    }

    type Query {
        user(id: Int!): User
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
    }
`

module.exports =  [
    typeDefs
]