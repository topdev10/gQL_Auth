const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
    constructor({ models }) {
      super()
      this.models = models
    }
  
    initialize(config) {
      this.context = config.context
    }
  
    getById = async (id) => {
      const user = await this.models.User.findOne({ where: { userId: id } })
      return user
    }
  
    getByType = async (type) => {
      const user = await this.models.User.findOne({ where: { type } })
      return user
    }
  
    getByEmail = async (email) => {
      const user = await this.models.User.findOne({ where: { email } })
      return user
    }
  
    getAuthProvider = async (user, provider) => {
      const result = await user.hasAuthProvider(provider)
      return result
    }
  
    addAuthProvider = async (user, provider) => {
      const result = await user.addAuthProvider(provider)
      return result
    }
  
    /**
     * Creates a new user
     * @param {Object} user
     * @param {Object} param1 - Additional mandatory options
     */
    createUser = async (user) => {
      const result = await this.models.User.create({
        username: user.username,
        password: user.password,
      }) // If transaction is passed, set transaction
      return result
    }

    /**
     * Authenticate User with username and Password
     * @param {String} username
     * @param {String} password
     */

    authUser = async ({username, password}) => {
        const result = await this.models.User.findOne({ where: { username, password } });
        return result;
    }
    /**
     * Updates user
     * @param {Object} user
     * @param {Object} param1 - Optional, contains Sequelize transaction
     */
    updateUser = async (user, { transaction }) => {
      const result = await this.models.User.update({
        username: user.username,
        password: user.password,
      }, {
        where: {
          userId: user.id
        },
        transaction: transaction ? transaction : '' // If transaction is passed, set transaction
      })
      return result
    }
  
    /**
     * Sets user's status to passed one
     * @param {Number} id - User Id
     * @param {String} status - User status enum
     */
    setUserStatus = async (id, status) => {
      const result = await this.models.User.update({
        status
      }, {
        where: { userId: id },
        returning: true, // return the updated row
        plain: true // no meta data
      })
      return result[1]
    }
  
    resetPassword = async (id, passwordHash) => {
      const result = await this.models.User.update({
        passwordHash
      }, {
        where: { userId: id },
      })
      return result[0]
    }
  }
  
module.exports = UserAPI;