var OctoAppController = require('./octo-app.controller');

module.exports = function(app) {
  app.get('/', OctoAppController.index);
}