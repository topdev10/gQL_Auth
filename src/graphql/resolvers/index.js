const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async authenticate(root, { username, password }, { dataSources }) {
            return dataSources.userAPI.authUser({username, password})
        }
    },

    Mutation: {
        async createUser(root, { username, password }, { dataSources }) {
            return dataSources.userAPI.createUser({username, password});
        }
    },
}

module.exports = resolvers;