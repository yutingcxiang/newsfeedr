import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchArticles } from '../../actions/articleActions';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class SearchInput extends Component {
  state = {
    text: '',
    page: 1,
    redirect: false
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchArticles(this.state.text, this.state.page)
    this.setState({
      page: 1,
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={`/search/${this.state.text}`} />
      )
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3 class="ui medium header">Looking for something specific?</h3>
          <div class="ui action input">
            <input type="text" placeholder="Search news..." value={this.state.text} onChange={this.handleChange}/>
            <button class="ui button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.results}
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query, page) => dispatch(searchArticles(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
