import React, { Component } from 'react';
import SearchInput from '../components/filters/SearchInput';
import ResultsList from '../components/articles/ResultsList';
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
  }

  previousPage = () => {
    if (this.state.page > 1) {
    this.setState(prevState => {
      return {page: prevState.page - 1}
    }, () => {
      this.props.searchArticles(this.props.query, this.state.page)
    })
    }
  }

  render() {
    let pagination;

    if (this.props.results.length > 0){
      pagination = (<div>
        <button onClick={this.previousPage}>Previous</button>
        <label>{this.state.page}</label>
        <button onClick={this.nextPage}>Next</button>
      </div>
      )
    }

    return(
      <div>
        <div id="search">
          <SearchInput searchArticles={this.props.searchArticles}/>
        </div>

        {pagination}
        <div class="ui section divider"></div>
        <ResultsList results={this.props.results} fetchDone={this.props.fetchDone}/>
        <div class="ui section divider"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.articles.results,
    fetchDone: state.articles.fetchDone,
    query: state.articles.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query, page) => dispatch(searchArticles(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
