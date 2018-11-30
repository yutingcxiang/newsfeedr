import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';

class SearchResults extends Component {

  renderResults = () => {
    return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    return(
      <div>
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.results}
}

export default connect(mapStateToProps)(SearchResults);
