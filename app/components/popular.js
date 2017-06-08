var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api')

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

function ReposGrid(props){
  return(
         <ul className="popular-list">
         {props.repos.map(function(repo, index) {
            return(
                  <li key={repo.name}
                  className= "popular-item">
                      <div className="popular-rank">#{index+1}</div>
                      <ul className="space-list-items">
                          <li>
                          <img className="avatar" src={repo.owner.avatar_url}/>
                          </li>
                          <li>
                              <a href={repo.html_url}>{repo.name}</a>
                          </li>
                          <li>
                              @{repo.owner.login}
                          </li>
                      </ul>
                  </li>
               )
         })}
       </ul>
  )
}

ReposGrid.propTypes={
  repos: PropTypes.array.isRequire
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // setting default state in constructor
      selectedLanguage: 'All',
      repos: null
    }
    // everytime we update language, this refers to the object itself
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState({
      selectedLanguage: lang,
      repos: null
    })
    api.fetchPopRepos(lang)
      .then((res)=>this.setState({repos: res}));
  }

  render() {
    return (
       <div>
         <SelectedLanguage
             selectedLanguage = {this.state.selectedLanguage}
             onSelect={this.updateLanguage} />
             {!this.state.repos ?
                <p>...LOADING</p> :
                <ReposGrid
                repos={this.state.repos} />}
       </div>
    )
  }
}

module.exports = Popular
