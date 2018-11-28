import React, { Component } from 'react';
import Category from '../components/articles/Category';
import { connect } from 'react-redux';

class CategoriesContainer extends Component {

  render() {
    return(
      <div>
        Categories Here!
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(CategoriesContainer);
