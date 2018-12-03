import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';

class ArticlesList extends Component {

  renderArticles = () => {
    return (this.props.sourceArticles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    return(
      <div>
        {this.renderArticles()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.sourceArticles}
}

export default connect(mapStateToProps)(ArticlesList);
