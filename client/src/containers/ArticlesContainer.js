import React, { Component } from 'react';
import ArticleCard from '../components/articles/ArticleCard';
import { connect } from 'react-redux';

class ArticlesContainer extends Component {
  // constructor(props){
  //    super(props);
  //    this.state ={
  //        arrticles: '',
  //     }
  //  }

  renderArticles = () => {
   return (this.props.articles.map(article => {
     return <ArticleCard /> })
     )
   }

  render() {
    return(
      <div>
        Articles
        {this.renderArticles()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(ArticlesContainer);
