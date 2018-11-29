import React, { Component } from 'react';
import SourcesList from '../components/articles/SourcesList';
import CategoriesList from '../components/articles/CategoriesList';
import { connect } from 'react-redux';

class SourcesContainer extends Component {

  render() {
    return(
      <div>
        <SourcesList />
        <CategoriesList />
      </div>
    )
  }
}

export default SourcesContainer;
