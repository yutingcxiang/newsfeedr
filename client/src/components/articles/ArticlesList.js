import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import SortFilter from '../filters/SortFilter';

class ArticlesList extends Component {
  state = {
    page: 1
  }

  renderArticles = () => {
    return (this.props.sourceArticles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  nextPage = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    })
  }

  previousPage = () => {
    this.setState(prevState => {
      if (prevState.page > 1) {
        return {page: prevState.page - 1}
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.previousPage}>Previous</button>
        <label>{this.state.page}</label>
        <button onClick={this.nextPage}>Next</button>
        {this.renderArticles()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {results: state.articles.sourceArticles}
}

export default connect(mapStateToProps)(ArticlesList);
