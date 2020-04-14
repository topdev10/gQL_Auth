const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async user(root, { id }, { dataSources }) {
            return dataSources.userAPI.getById(id)
        }
    },

    Mutation: {
        async createUser(root, { username, password }, { dataSources }) {
            return dataSources.userAPI.createUser({username, password});
        }
    },
}

module.exports = resolvers;