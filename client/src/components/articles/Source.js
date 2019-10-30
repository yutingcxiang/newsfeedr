import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Source extends Component {

  render() {
    return(
      <div className="item">
        <h3 className="header"><Link to={{
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
