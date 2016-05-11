'use strict';

const mongoose = require('mongoose');
const MarkDown = require('../models/markdown').MarkDown;

module.exports = {
  create,
  findById,
  findAllMarkDowns
};

function create(payload){
  return MarkDown.create(payload);
}

function findById(markdownId){
  return MarkDown.findById(markdownId, '-__v').exec();
}

function findAllMarkDowns(){

  let pipeline = [
    {
      $project: {
        title: 1,
        _id: 1,
        createdAt: 1
      }
    }
  ];

  pipeline.push({
    $sort: {
      createdAt: -1
    }
  });

  return MarkDown.aggregate(pipeline).exec();
}