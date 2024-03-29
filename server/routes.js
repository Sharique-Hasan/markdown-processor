var Config = require('./config/config');

var prefix = `${Config.get('/api/prefix')}/${Config.get('/api/version')}`;

exports.endpoints = [
  { method: 'GET',
    path: '/{somethingss*}',
    config: {
      handler: {
        directory: {
          path: __dirname + '/../client/app',
          listing: true,
          defaultExtension: 'html'
        }
      }
    }
  }
];
