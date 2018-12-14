import React, { Component } from 'react';
import ArticlesList from '../components/articles/ArticlesList';
import { connect } from 'react-redux';
import { fetchHeadlines } from '../actions/articleActions';

class HeadlinesContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
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
        <ArticlesList articles={this.props.headlines} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {headlines: state.articles.headlines}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHeadlines: () => dispatch(fetchHeadlines())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadlinesContainer);
