import React, { Component } from 'react';

class Source extends React.Component {

  render() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}


export default Source;
