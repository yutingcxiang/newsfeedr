import React, { Component } from 'react';
import Article from './Article';
import SearchInput from '../filters/SearchInput';

class ResultsList extends Component {

  renderResults = () => {
    if (this.props.results.length > 0) {
      return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    } else if (this.props.fetchDone === true){
      return (<p>No results found.</p>)
    }
  }

  render() {
    return(
      <div id="results-list">
        {this.renderResults()}
      </div>
    )
  }
}

export default ResultsList;
