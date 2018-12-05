import React, { Component } from 'react';
import HeadlinesList from '../components/articles/HeadlinesList';
import { connect } from 'react-redux';
import { fetchHeadlines } from '../actions/articleActions';

class HeadlinesContainer extends Component {
  componentDidMount() {
    this.props.fetchHeadlines()
    this.interval = setInterval(() =>
      this.props.fetchHeadlines("us"), 600000)
  }

  componentWillUnmount() {
     clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <HeadlinesList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHeadlines: () => dispatch(fetchHeadlines())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadlinesContainer);
