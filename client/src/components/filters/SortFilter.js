import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { searchArticles } from '../../actions/articleActions';

class SortFilter extends Component {
  render () {
    return(
      <div>
        <label>Sort by:</label>
        <button>Recency</button>
        <button>Relevancy</button>
        <button>Popularity</button>
      </div>
    )
  }
}

export default SortFilter;
