import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import SortFilter from '../filters/SortFilter';

class ResultsList extends Component {
  state = {
    results: []
  }

  renderResults = () => {
    return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    const results = this.props.results

    return(
      <div>
        {results.length > 0 && <SortFilter />}
        {results !== undefined && this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.results}
}

export default connect(mapStateToProps)(ResultsList);
