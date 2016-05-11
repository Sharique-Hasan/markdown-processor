var Confidence = require('confidence'),
  Config = require('./config')
  ;

var criteria = {
  env: process.env.NODE_ENV
};


var manifest = {
  $meta: 'This file defines the service.',
  server: Config.get('/server'),
  connections: [{
    port: Config.get('/port')
  }],
  plugins: {
    'inert': {},
    'vision': {},
    'hapi-swagger': Config.get('/swaggerOptions'),
    'consistency':{
      uriParam: 'apiVersion',
      customHeaderKey: 'api-version'
    },
    './modules/markdown':{}
  }
};


var store = new Confidence.Store(manifest);


exports.get = function (key) {

  return store.get(key, criteria);
};


exports.meta = function (key) {

  return store.meta(key, criteria);
};
