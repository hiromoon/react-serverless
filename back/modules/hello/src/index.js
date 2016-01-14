/**
 * Lib
 */
var React = require('react');
var ReactDOM = require('react-dom');

var testComponent = React.createClass({
  render: function() {
            return (<span className="testComponent">"hello"</span>);
          }
});

module.exports.respond = function(event, cb) {
  return cb(null, React.renderToStaticMarkup(<span className="testComponent">"hello"</span>));
};
