'use strict';

var Joi = require('joi');
var Boom = require('boom');
var Config = require('../../config/config');
var Controller = require('./controller');

exports.create = {
  description: 'Saves a Markdown',
  notes: 'this endpoint will save the markdown provided',
  tags: ['api'],
  validate:{
    params:{
      apiVersion : Joi.string().valid(['v1']).description('Provide the API version')
    },
    payload:{
      title: Joi.string()
        .required()
        .description("Provide the title for the markdown document"),
      markdown: Joi.string()
        .required().options({ language: { string : { required: 'Markdown is required' } } })
        .description("Provide the markdown text")
    }
  },
  handler:{
    versioned:{
      "v1.0" : Controller.v1.create
    }
  }

};

exports.getById = {
  description: 'Get Markdown and HTML by ID',
  notes: 'it fetches the Markdown and processed HTML by provided ID',
  tags: ['api'],
  validate:{
    params:{
      apiVersion : Joi.string().valid(['v1']).description('Provide the API version'),
      id : Joi.string().required().max(24).min(24).description('Provide the ID of the MarkDown record')
    }
  },
  handler:{
    versioned:{
      "v1.0" : Controller.v1.getById
    }
  }
};

exports.getAll = {
  description: 'Get All Markdowns list',
  notes: 'it fetches the Markdown list',
  tags: ['api'],
  validate:{
    params:{
      apiVersion : Joi.string().valid(['v1']).description('Provide the API version')
    }
  },
  handler:{
    versioned:{
      "v1.0" : Controller.v1.getAll
    }
  }
};