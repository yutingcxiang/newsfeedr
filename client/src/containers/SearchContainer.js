import React, { Component } from 'react';
import SearchInput from '../components/filters/SearchInput';
import ResultsList from '../components/articles/ResultsList';
import RecentFilters from '../components/filters/RecentFilters';
import Pagination from '../components/layout/Pagination';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { getRecentFilters } from '../actions/filterActions';

class SearchContainer extends Component {
  state = {
      page: 1
  }

  componentDidMount(){
    this.props.getRecentFilters()
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
    const uuidv4 = require('uuid/v4');

    return(
      <div>
        <div className="ui section divider"></div>
        <div id="search">
          <SearchInput searchArticles={this.props.searchArticles} key={uuidv4()}/>
        </div>
        <div className="ui section divider"></div>

        <RecentFilters filters={this.props.filters}/>

        <div className="ui section divider"></div>
        <ResultsList results={this.props.results} numResults={this.props.numResults} searchDone={this.props.searchDone}/>

        {this.props.numResults > 100 && <Pagination page={this.state.page} previousPage={this.previousPage} nextPage={this.nextPage}/>}
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
    searchDone: state.articles.searchDone,
    filters: state.filters.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query, page) => dispatch(searchArticles(query, page)),
    getRecentFilters: () => dispatch(getRecentFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
