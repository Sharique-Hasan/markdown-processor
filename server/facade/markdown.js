'use strict';


const repos = require('../repositories');
const helpers = require('../helpers');
const _ = require('lodash');

var v1 = {};

module.exports = {
  v1
};


v1.saveMarkDown = (payload) => {

  let markDown = payload.markdown;
  return helpers.markdown.processPayload(markDown)
    .then((html) => {
      let data = {
        rawMarkDown: markDown,
        processedHtml: html,
        title: payload.title
      };
      return repos.markdown.create(data);
    });

};

v1.getMarkDownById = (markdownId) => {

  return repos.markdown.findById(markdownId);

};

v1.getAllMarkDowns = () => {

  return repos.markdown.findAllMarkDowns();

};