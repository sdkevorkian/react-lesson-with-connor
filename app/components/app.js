var React = require('react');
var Popular = require('./popular');

class App extends React.Component {
  render() {

    return(
      <div className="container">
        Hello!
        <Popular />
      </div>
    )
  }
}

module.exports = App;
