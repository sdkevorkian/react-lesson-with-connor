var React = require('react');
var PropTypes = require('prop-types');

function SelectedLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
  <ul className="languages">
    {languages.map((lang, index) => {
      return(
             //  needs to have a unique key so that React knows to update only things that change
             // .bind(thing that we are binding it to, already defined in class, and what we want passed to bind)
        <li
          style={lang ===props.selectedLanguage ? {color: 'red'} : null}
          onClick = {props.onSelect.bind(null, lang)}
          key = {lang}>
          {lang}
        </li>
      )
    })}
  </ul>
  )
}

// way of validating prop inputs
SelectedLanguage.propTypes= {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // setting default state in constructor
      selectedLanguage: 'All'
    }
    // everytime we update language, this refers to the object itself
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState({
      selectedLanguage: lang
    })
  }

  render() {
    return (
       <div>
         <SelectedLanguage
             selectedLanguage = {this.state.selectedLanguage}
             onSelect={this.updateLanguage} />
       </div>
    )
  }
}

module.exports = Popular
