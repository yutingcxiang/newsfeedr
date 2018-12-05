import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../actions/articleActions';
import ArticlesList from '../components/articles/ArticlesList';

class SourceArticlesContainer extends Component {

  componentDidMount() {
    this.props.searchSourceArticles(this.props.match.params.id, 1)
  }

  render(){

    return(
      <div>
        <h2>{this.props.location.state.name}</h2>
        <ArticlesList sourceArticles={this.props.sourceArticles} source={this.props.match.params.id}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {sourceArticles: state.articles.sourceArticles}
}

const mapDispatchToProps = dispatch => {
  return {
    searchSourceArticles: (source) => dispatch(searchSourceArticles(source, 1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceArticlesContainer);
