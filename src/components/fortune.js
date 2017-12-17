import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../actions/index';

export class Fortune extends React.Component {
  setLanguage(language) {
    this.props.dispatch( setLanguage(language) );
  }
  
  render() {
    const languages = [
      { lang: 'en', name: "English" },
      { lang: 'fr', name: "French" },
      { lang: 'de', name: "German" }
    ];
    
    const choices = languages.map( (lang, index) => {
          return <li key={index} {...lang} onClick={() => this.setLanguage(lang)}>{lang.name}</li> 
    });
                                                                                     
    return (
      <div className="dropdown">
        <button className="btn-drop">Choose a Language</button>
        <ul className="dropdown-content">
          {choices}
        </ul>
        <p lang='en'>"I destroy my enemy when I make him my friend - A. Lincoln"</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    language: state.language
});

export default connect(mapStateToProps)(Fortune);
