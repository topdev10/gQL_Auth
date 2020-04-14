const models = require("../../database/models");
const UserAPI = require("./user");

const dataSources = () => {
  const sources = {
    userAPI: new UserAPI({ models }),
  };

  return sources;
};

module.exports = dataSources;