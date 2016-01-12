/**
 * Lib
 */
var React = require('react');
var ReactDOM = require('react-dom');

var testComponent = React.createClass({
  render: function() {
            return React.createElement('span', {className: "testComponent"}, "hello");
          }
});

module.exports.respond = function(event, cb) {
  return cb(null, React.renderToStaticMarkup(
                    React.createElement(testComponent, null)
          ));
};
