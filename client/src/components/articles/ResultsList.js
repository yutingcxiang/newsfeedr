import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import SortFilter from '../filters/SortFilter';
import { searchArticles } from '../../actions/articleActions';

class ResultsList extends Component {
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

  renderResults = () => {
    if (this.props.results.length > 0) {
      return (this.props.results.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    } else if (this.props.fetchDone === true){
      return (<p>No results found.</p>)
    }
  }

  render() {
    if (this.props.results.length > 0){
      return(<div>
        <button onClick={this.previousPage}>Previous</button>
        <label>{this.state.page}</label>
        <button onClick={this.nextPage}>Next</button>
        {this.renderResults()}
      </div>
    )
  }

    return(
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
