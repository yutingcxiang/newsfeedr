import React, { Component } from 'react';
import SearchInput from '../components/filters/SearchInput';
import ResultsList from '../components/articles/ResultsList';
import RecentFilters from '../components/filters/RecentFilters';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';

class SearchContainer extends Component {
  state = {
      page: 1
  }

  nextPage = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    }, () => {
        this.props.searchArticles(this.props.query, this.state.page)
    })
    window.scrollTo(0, 0)
  }

  previousPage = () => {
    if (this.state.page > 1) {
    this.setState(prevState => {
      return {page: prevState.page - 1}
    }, () => {
      this.props.searchArticles(this.props.query, this.state.page)
    })
    }
    window.scrollTo(0, 0)
  }

  render() {
    let pagination;

    if (this.props.results.length > 0){
      pagination = (
      <div>
        <button className="ui labeled icon button" onClick={this.previousPage}>
          <i className="left arrow icon"></i>
          Previous
        </button>
        <label className="ui circular large label">{this.state.page}</label>
        <button className="ui right labeled icon button" onClick={this.nextPage}>
          <i className="right arrow icon"></i>
          Next
        </button>
      </div>
      )
    }

    const uuidv4 = require('uuid/v4');

    return(
      <div>
        <div className="ui section divider"></div>
        <div id="search">
          <SearchInput searchArticles={this.props.searchArticles} key={uuidv4()}/>
        </div>
        <div className="ui section divider"></div>

        <RecentFilters searchFilter={this.props.searchArticles}/>

        <div className="ui section divider"></div>
        <ResultsList results={this.props.results} numResults={this.props.numResults} searchDone={this.props.searchDone}/>
        {pagination}
        <br></br>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.articles.results,
    query: state.articles.query,
    numResults: state.articles.numResults,
    searchDone: state.articles.searchDone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query, page) => dispatch(searchArticles(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
