import React, { Component } from 'react';
import Source from './Source';
import { connect } from 'react-redux';

class SourcesList extends Component {

  renderSources = () => {
    return (this.props.sources.map((source, index) => <Source key={index} id={source.id} name={source.name} description={source.description} url={source.url} category={source.category} />))
  }


  render() {
    return(
      <div id="sources-list">
        <div className="ui list">
          {this.renderSources()}
        </div>
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
