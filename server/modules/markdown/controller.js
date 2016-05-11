'use strict';

var services = require('../../facade');

var v1 = {};

module.exports = {
  v1
};

v1.create = function(request, reply){

  services.markdown.v1.saveMarkDown(request.payload)
    .then(function(response){
      return reply(response);
    }, function(err){
      return reply(err);
    });

};

v1.getById = function(request, reply){

  services.markdown.v1.getMarkDownById(request.params.id)
    .then(function(response){
      return reply(response);
    }, function(err){
      return reply(err);
    })

};

v1.getAll = function(request, reply){

  services.markdown.v1.getAllMarkDowns()
    .then(function(response){
      return reply(response);
    }, function(err){
      return reply(err);
    })

};