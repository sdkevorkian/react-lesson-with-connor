var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');

// we can require css here
require('./style.css');




ReactDOM.render(
  <App />,
  document.getElementById('app')
);
