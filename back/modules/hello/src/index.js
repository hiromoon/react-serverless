var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var testComponent = React.createClass({
  render: function() {
            return <span className="testComponent">"hello"</span>;
          }
});

//var view = React.renderToStaticMarkup(<testComponent />);
var view = ReactDOMServer.renderToString(<testComponent />);

module.exports.respond = function(event, cb) {
  return cb(null, view);
};
