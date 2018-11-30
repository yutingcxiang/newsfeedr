import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchArticles } from '../../actions/articleActions';

class SearchInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchArticles(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
    searchArticles: (query) => dispatch(searchArticles(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
