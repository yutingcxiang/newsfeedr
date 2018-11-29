import React, { Component } from 'react';
import Source from '../components/articles/Source';
import { connect } from 'react-redux';

class SourcesContainer extends Component {

  renderSources = () => {
   return (this.props.sources.map((source, index) => {
     return <Source key={index} name={source.name} description={source.description} url={source.url} category={source.category} country={source.country} /> })
     )
   }

  render() {
    return(
      <div>
        {this.renderSources()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {sources: state.articles.sources}
}

export default connect(mapStateToProps)(SourcesContainer);
