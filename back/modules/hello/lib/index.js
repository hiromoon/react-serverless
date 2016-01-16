'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var testComponent = React.createClass({
  displayName: 'testComponent',

  render: function render() {
    return React.createElement(
      'span',
      { className: 'testComponent' },
      '"hello"'
    );
  }
});

//var view = React.renderToStaticMarkup(<testComponent />);
var view = ReactDOMServer.renderToString(React.createElement('testComponent', null));

module.exports.respond = function (event, cb) {
  return cb(null, view);
};

