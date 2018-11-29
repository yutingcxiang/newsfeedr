import React, { Component } from 'react';
import Source from './Source';
import { connect } from 'react-redux';

class SourcesList extends Component {

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
  return {
    sources: state.articles.sources,
  }
}

export default connect(mapStateToProps)(SourcesList);
