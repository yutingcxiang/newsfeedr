import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchArticles } from '../../actions/articleActions';

class SearchInput extends Component {
  state = {
    text: '',
    page: 1
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
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Looking for something specific?</label><br />
          <input type="text" placeholder="Search news..." value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" />
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
