import React, { Component } from 'react';
import Category from '../components/articles/Category';
import { connect } from 'react-redux';

class CategoriesContainer extends Component {

  renderArticles = () => {
   return (this.props.articles.map((article, index) => {
     return <Category key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> })
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

export default connect(mapStateToProps)(CategoriesContainer);
