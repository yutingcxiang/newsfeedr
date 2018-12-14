import React, { Component } from 'react';
import Article from './Article';
import SearchInput from '../filters/SearchInput';

class ResultsList extends Component {

  renderResults = () => {
    if (this.props.numResults > 0) {
      return(this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    } 
  }

  render() {
    return(
      <div id="results-list">
        {this.props.searchDone && <p>{this.props.numResults || 0} results found.</p>}
        {this.props.searchDone && <div className="ui section divider"></div>}
        {this.renderResults()}
      </div>
    )
  }
}

export default ResultsList;
