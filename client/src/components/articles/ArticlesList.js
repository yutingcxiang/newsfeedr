import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../../actions/articleActions';

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
    this.props.searchSourceArticles(this.props.source, this.state.page)
  }

  previousPage = () => {
    this.setState(prevState => {
      if (prevState.page > 1) {
        return {page: prevState.page - 1}
      }
    })
    if (this.state.page > 1) {
      this.props.searchSourceArticles(this.props.source, this.state.page)
    }
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

const mapDispatchToProps = dispatch => {
  return {
    searchSourceArticles: (source, page) => dispatch(searchSourceArticles(source, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
