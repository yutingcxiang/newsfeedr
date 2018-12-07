import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Source extends Component {

  render() {
    return(
      <div class="item">
        <h3 class="header"><Link to={{
          pathname: `/sources/${this.props.id}`,
          state: {
            name: this.props.name }
          }}>{this.props.name}</Link></h3>
        <p>{this.props.description}</p>
        <br></br>
      </div>
    )
  }
}

export default Source;
