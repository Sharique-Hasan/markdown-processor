var Config = require('../config/config');
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MarkdownSchema = new Schema({
  title: { type: String },
  rawMarkDown: { type: String },
  processedHtml: { type: String }
}, {
  timestamps: true
});

var markdown = mongoose.model('markdown', MarkdownSchema);

module.exports = { MarkDown : markdown };
