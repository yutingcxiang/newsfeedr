import React, { Component } from 'react';
import SourcesList from '../components/articles/SourcesList';
import { connect } from 'react-redux';

class SourcesContainer extends Component {
  state = {
    showSources: false,
  }

  renderSources = event => {
    this.setState({
      showSources: true,
    })
  }

  render() {

    return(
      <div>
        <SourcesList />}
      </div>
    )
  }
}

export default SourcesContainer;
