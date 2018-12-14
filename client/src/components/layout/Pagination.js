import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return(
      <div>
        <button className="ui labeled icon button" onClick={this.props.previousPage}>
          <i className="left arrow icon"></i>
          Previous
        </button>
        <label className="ui circular large label">{this.props.page}</label>
        <button className="ui right labeled icon button" onClick={this.props.nextPage}>
          <i className="right arrow icon"></i>
          Next
        </button>
      </div>
    )
  }
}

export default Pagination;
