'use strict';

var Config = require('../../config/config');
var prefix = Config.get('/api/prefix');
var Markdown = require('./markdown');

module.exports.endpoints = [
  {
    method: 'POST',
    path: `${prefix}/{apiVersion}/markdown/save`,
    config: Markdown.create
  },
  {
    method: 'GET',
    path: `${prefix}/{apiVersion}/markdown/get/{id}`,
    config: Markdown.getById
  },
  {
    method: 'GET',
    path: `${prefix}/{apiVersion}/markdown/get`,
    config: Markdown.getAll
  }
];