import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/filters/SearchInput';
import SearchResults from '../components/filters/SearchResults';

class SearchContainer extends Component {

  render() {
    return(
      <div>
        <SearchInput searchArticles={this.props.searchArticles}/>
        <SearchResults />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.results}
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: text => dispatch({type: 'SEARCH_ARTICLES', text})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
