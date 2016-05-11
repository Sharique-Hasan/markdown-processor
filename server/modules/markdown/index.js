
var Routes = require('./routes');

exports.register = function (server, options, next) {

  server.route(Routes.endpoints);
  next();

};

exports.register.attributes = {
  pkg: require('./package.json')
};