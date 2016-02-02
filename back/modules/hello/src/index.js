var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var MUI = require('material-ui');
var main = require('./serverside.react');

var view = ReactDOMServer.renderToString(<main />);

module.exports.respond = function(event, cb) {
  return cb(null, view);
};
