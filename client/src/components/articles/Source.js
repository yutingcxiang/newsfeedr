import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Source extends React.Component {

  render() {
    return(
      <div>
        <h3><Link to={{
          pathname: `/sources/${this.props.id}`,
          state: {
            name: this.props.name }
          }}>{this.props.name}</Link></h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Source;
