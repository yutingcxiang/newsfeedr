import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';

class HeadlinesList extends Component {

  renderHeadlines = () => {
    return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    return(
      <div>
        {this.renderHeadlines()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.headlines}
}

export default connect(mapStateToProps)(HeadlinesList);
