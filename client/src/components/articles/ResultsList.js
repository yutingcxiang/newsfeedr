import React from 'react';
import Article from './Article';

const ResultsList = (props) => {

  const renderResults = () => {
    if (props.numResults > 0) {
      return(props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    }
  }

  const renderNumResults = () => {
    if (props.searchDone) {
      return(<p><strong>{props.numResults || 0} results found.</strong></p>)
    }
  }

  return(
    <div id="results-list">
      {renderNumResults()}
      <br></br>
      {renderResults()}
    </div>
  )
}

export default ResultsList;
