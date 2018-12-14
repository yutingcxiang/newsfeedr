import React, { Component } from 'react';
import Article from './Article';

class ArticlesList extends Component {

  renderArticles = () => {
    return (this.props.articles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    return(
      <div id="articles-list">
        {this.renderArticles()}
      </div>
    )
  }
}

export default ArticlesList;
