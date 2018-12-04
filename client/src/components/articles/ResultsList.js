import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import SortFilter from '../filters/SortFilter';

class ResultsList extends Component {

  renderResults = () => {
    if (this.props.results.length > 0) {
      return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    } else if (this.props.fetchDone === true){
      return (<p>No results found.</p>)
    }
  }

  render() {
    const results = this.props.results

    return(
      <div>
        {results.length > 0 && <SortFilter />}
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.results, fetchDone: state.articles.fetchDone}
}

export default connect(mapStateToProps)(ResultsList);
