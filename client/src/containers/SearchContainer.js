import React, { Component } from 'react';
import SearchInput from '../components/filters/SearchInput';
import ResultsList from '../components/articles/ResultsList';

class SearchContainer extends Component {

  render() {
    return(
      <div>
        <SearchInput searchArticles={this.props.searchArticles}/>
        <ResultsList results={this.props.results}/>
      </div>
    )
  }
}
export default SearchContainer;
