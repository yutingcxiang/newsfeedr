import React, { Component } from 'react'
import ArticleList from '../components/article/ArticleList'

class ArticlesContainer extends Component {
  render() {
    return(
      <div>
        Articles Here!
        <ArticleList />
      </div>
    )
  }
}

export default ArticlesContainer
