var Confidence  = require('confidence'),
  Package       = require('../../package')
  ;

var criteria = {
  env: process.env.NODE_ENV
};


var config = {
  $meta: 'This file configures the service.',
  version: Package.version,
  port: {
    $filter: 'env',
    production: process.env.PORT,
    test: 9000,
    $default: 5000
  },
  server: {
    debug: {
      $filter: 'env',
      production: false,
      test: false,
      $default: { request: ['error'] }
    },
    connections: {
      routes: {
        security: true,
        cors:{
          origin:[
            'http://localhost:3000',
            'http://127.0.0.1:3000'
          ]
        }
      }
    }
  },
  api: {
    prefix: '/api',
    version: 'v1',
    service:'users'
  },
  mongoUri: {
    $filter: 'env',
    production: process.env.MONGO_URI,
    test: 'mongodb://localhost:27017/markdown-test',
    $default: 'mongodb://127.0.0.1:27017/markdown-local'
  },
  saltRounds: 10,
  swaggerOptions: {
    apiVersion: Package.version,
    documentationPath: '/docs/markdown',
    basePath:'/',
    schemes:['http'],
    labels:[
      'api'
    ],
    host : 'http://localhost:5000',
    endpoint: '/static/docs/markdown',
    info : {
      title: 'Markdown Processor',
      description: 'A markdown processor in HapiJS.'
    }
  }
};


var store = new Confidence.Store(config);


exports.get = function (key) {
  return store.get(key, criteria);
};


exports.meta = function (key) {
  return store.meta(key, criteria);
};
