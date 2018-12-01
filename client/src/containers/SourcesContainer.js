import React, { Component } from 'react';
import SourcesList from '../components/articles/SourcesList';
import CategoriesList from '../components/articles/CategoriesList';
import { connect } from 'react-redux';

class SourcesContainer extends Component {
  state = {
    showSources: false,
    showCategories: false,
  }

  renderSources = event => {
    this.setState({
      showSources: true,
      showCategories: false,
    })
  }

  renderCategories = event => {
    this.setState({
      showSources: false,
      showCategories: true
    })
  }

  render() {
    const showSources = this.state.showSources
    const showCategories = this.state.showCategories

    return(
      <div>
        <button onClick={this.renderSources}>Browse By Source</button>
        <button onClick={this.renderCategories}>Browse Category</button>
        {showSources && <SourcesList />}
        {showCategories && <CategoriesList />}
      </div>
    )
  }
}

export default SourcesContainer;
