import React, { Component } from 'react';
import SourceArticles from './SourceArticles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Source extends React.Component {

  render() {
    return(
      <div>
        <h3><Link to={`/sources/${this.props.name}`}>{this.props.name}</Link></h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}


export default Source;
