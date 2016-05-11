'use strict';


module.exports = {
  processPayload
};

function processPayload(payload){
  return eliminateScriptTags(payload) /*All the headings has the higher priority than Line conversion to <p> tag*/
    .then(convertH6)
    .then(convertH5)
    .then(convertH4)
    .then(convertH3)
    .then(convertH2)
    .then(convertH1)
    .then(alternateH1)
    .then(alternateH2)
    .then(convertQuote) /*Quotes rendering has high priority than simple line to <p> tag*/
    .then(convertSimpleLine)
    .then(convertUnderScore)
    .then(convertStrong)
    .then(convertEm)
    .then(convertStrikeThrough)
    .then(convertAnchor)
    .then(convertCode)
}

function alternateH1(payload){
  let regex = /(\n*)(.*)(\n)(={3})(\n*)/gm;
  payload = payload.replace(regex, '<h1 style="border-bottom: 1px solid #eee">$2</h1>');
  return Promise.resolve(payload);
}

function alternateH2(payload){
  let regex = /(\n*)(.*)(\n)(-{3})(\n*)/gm;
  payload = payload.replace(regex, '<h2 style="border-bottom: 1px solid #eee">$2</h2>');
  return Promise.resolve(payload);
}

function convertH6(payload) {
  let regex = /(#{6})(.*)/g;
  payload = payload.replace(regex, '<h6>$1</h6>');
  return Promise.resolve(payload);
}

function convertH5(payload) {
  let regex = /#{5}(.*)/g;
  payload = payload.replace(regex, '<h5>$1</h5>');
  return Promise.resolve(payload);
}

function convertH4(payload) {
  let regex = /#{4}(.*)/g;
  payload = payload.replace(regex, '<h4>$1</h4>');
  return Promise.resolve(payload);
}

function convertH3(payload) {
  let regex = /#{3}(.*)/g;
  payload = payload.replace(regex, '<h3>$1</h3>');
  return Promise.resolve(payload);
}

function convertH2(payload) {
  let regex = /#{2}(.*)/g;
  payload = payload.replace(regex, '<h2>$1</h2>');
  return Promise.resolve(payload);
}

function convertH1(payload) {
  let regex = /#(.*)/g;
  payload = payload.replace(regex, '<h1>$1</h1>');
  return Promise.resolve(payload);
}

function convertSimpleLine(payload){
  let regex = /\n+(.*?)\n/gm;
  payload = payload.replace(regex, '<p>$1</p>');
  return Promise.resolve(payload);
}

function convertEm(payload){
  let regex = /\*(.*?)\*/gm;
  payload = payload.replace(regex, '<em>$1</em>');
  return Promise.resolve(payload);
}

function convertUnderScore(payload){
  let regex = /_(.*?)_/gm;
  payload = payload.replace(regex, '<em>$1</em>');
  return Promise.resolve(payload);
}

function convertStrikeThrough(payload){
  let regex = /~{2}(.*?)~{2}/gm;
  payload = payload.replace(regex, '<del>$1</del>');
  return Promise.resolve(payload);
}

function convertStrong(payload){
  let regex = /\*{2}(.*?)\*{2}/gm;
  payload = payload.replace(regex, '<strong>$1</strong>');
  return Promise.resolve(payload);
}

function convertAnchor(payload){
  let regex = /(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?([ \t]*)((['"])(.*?)\6[ \t]*)?\))/g;
  payload = payload.replace(regex, '<a href="$4" title=$6>$2</a>');
  return Promise.resolve(payload);
}

function convertCode(payload){
  let regex = /`{3}(.*?)`{3}/gm;
  payload = payload.replace(regex, '<pre>$1</pre>');
  return Promise.resolve(payload);
}

function convertQuote(payload){
  let regex = /\n*(>) (.*?)\n+/g;
  payload = payload.replace(regex, '<blockquote><p>$2</p></blockquote>');
  return Promise.resolve(payload);
}

function eliminateScriptTags(payload){
  let regex = /(<script(\s.*)*>)(.*)(<\/script>)/g;
  payload = payload.replace(regex, '\n');
  return Promise.resolve(payload);
}
