import React, { Component } from 'react';
import SourcesList from '../components/articles/SourcesList';
import CategoriesList from '../components/articles/CategoriesList';
import { connect } from 'react-redux';

class SourcesContainer extends Component {
  showSourcesList = event => {
    alert("working!")
  }

  showCategoriesList = event => {
    alert("also working!")
  }

  render() {
    return(
      <div>
        <button onClick={this.showSourcesList}>Browse By Source</button>
        <button onClick={this.showCategoriesList}>Browse Category</button>
      </div>
    )
  }
}

export default SourcesContainer;
