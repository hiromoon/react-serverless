'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

// Require Logic
var lib = require('../lib');
var React = require('react');
var ReactDOM = require('react-dom');

var testComponent = React.createFactory(React.createClass({
  render: function() {
    return (
      <span>Hello, Severless!!</span>
    );
  }
}))

// Lambda Handler
module.exports.handler = function(event, context) {
  context.succeed(React.renderToStaticMarkup(ReactDOM.body(null,
    testComponent(null)
)));
};
