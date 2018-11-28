import React, { Component } from 'react';
import Article from '../components/articles/Article';
import { connect } from 'react-redux';

class ArticlesContainer extends Component {

  renderArticles = () => {
   return (this.props.articles.map((article, index) => {
     return <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> })
     )
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
  return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(ArticlesContainer);
