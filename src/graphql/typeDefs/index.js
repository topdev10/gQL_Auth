const { gql } = require('apollo-server-express')

const typeDefs = gql `
    type User {
        id: Int!
        name: String!
        password: String!
    }

    type Query {
        user(id: Int!): User
    }

    type Mutation {
        createUser(name: String!, password: String!): User!
    }
`

module.exports =  [
    typeDefs
]