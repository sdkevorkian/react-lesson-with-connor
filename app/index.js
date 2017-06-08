var React = require('react');
var ReactDOM = require('react-dom');
// we can require it here
require('./style.css');

class App extends React.Component {
    render() {
        return (
          <div className="container">
            Hello!
          </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
