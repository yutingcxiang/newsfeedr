import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../actions/articleActions';
import ArticlesList from '../components/articles/ArticlesList';

class SourceArticlesContainer extends Component {
  state = {
    page: 1
  }

  componentDidMount() {
    this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
  }

  nextPage = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    }, () => {
        this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
    })
  }

  previousPage = () => {
    if (this.state.page > 1) {
    this.setState(prevState => {
      return {page: prevState.page - 1}
    }, () => {
      this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
    })
    }
  }

  render(){
    return(
      <div>
        <div class="ui blue label"><h3>{this.props.location.state.name}</h3></div>
        <div class="ui section divider"></div>
        <ArticlesList sourceArticles={this.props.sourceArticles} source={this.props.match.params.id}/>
        <div class="ui section divider"></div>

        <button onClick={this.previousPage}>Previous</button>
        <label>{this.state.page}</label>
        <button onClick={this.nextPage}>Next</button>
        <div class="ui section divider"></div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {sourceArticles: state.articles.sourceArticles}
}

const mapDispatchToProps = dispatch => {
  return {
    searchSourceArticles: (source, page) => dispatch(searchSourceArticles(source, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceArticlesContainer);
