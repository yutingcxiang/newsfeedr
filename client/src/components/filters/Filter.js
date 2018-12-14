import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this.props.query)
  }

  render() {
    return(
      <React.Fragment>
        <p className="ui blue tag label" onClick={this.handleClick}>{this.props.query}</p>
      </React.Fragment>
    )
  }
}

export default Filter;
