import React from 'react';
import Article from './Article';
import SearchInput from '../filters/SearchInput';

const ResultsList = (props) => {

  const renderResults = () => {
    if (props.numResults > 0) {
      return(props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    }
  }

  const renderNumResults = () => {
    if (props.searchDone) {
      return(<p>{props.numResults || 0} results found.</p>)
    }
  }

  return(
    <div id="results-list">
      {renderNumResults()}
      {renderResults()}
    </div>
  )
}

export default ResultsList;
