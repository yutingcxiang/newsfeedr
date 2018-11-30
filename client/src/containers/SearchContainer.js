import React, { Component } from 'react';
import SearchInput from '../components/filters/SearchInput';
import SearchResults from '../components/filters/SearchResults';

class SearchContainer extends Component {

  render() {
    return(
      <div>
        <SearchInput searchArticles={this.props.searchArticles}/>
        <SearchResults results={this.props.results}/>
      </div>
    )
  }
}
export default SearchContainer;
