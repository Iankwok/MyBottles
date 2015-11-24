var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wdi-express'
    },
    port: 3000,
    db: 'mongodb://localhost/wdi-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'wdi-express'
    },
    port: 3000,
    db: 'mongodb://localhost/wdi-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'wdi-express'
    },
    port: 3000,
    db: 'mongodb://heroku_bf7pkb7s:1dhhubiiemh7vaojl4a9ejbqkn@ds057214.mongolab.com:57214/heroku_bf7pkb7s'
  }
};

module.exports = config[env];
