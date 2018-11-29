import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchContainer extends Component {
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
    this.props.fetchFilteredNews(this.state.text)
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

export default SearchContainer;
