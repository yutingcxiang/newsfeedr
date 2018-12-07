import React, { Component } from 'react';
import SourcesList from '../components/articles/SourcesList';
import { connect } from 'react-redux';
import { fetchSources } from '../actions/articleActions';

class SourcesContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchSources()
  }

  render() {

    return(
      <div>
        <SourcesList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.sources}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSources: () => dispatch(fetchSources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourcesContainer);
