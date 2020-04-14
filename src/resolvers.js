// src/resolvers.js

const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findById(id)
        }
    },

    Mutation: {
        async createUser(root, { name, password }, { models }) {
            return models.User.create({
                name,
                password: await bcrypt.hash(password, 10)
            })
        }
    },
}

module.exports = resolvers