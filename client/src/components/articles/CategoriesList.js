import React, { Component } from 'react';
import Category from './Category';
import { connect } from 'react-redux';

class CategoriesList extends Component {

  renderCategories = () => {
    return (this.props.categories.map(category => <Category name={category}/>))
  }

  render() {
    return(
      <div>
        {this.renderCategories()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.articles.categories
  }
}

export default connect(mapStateToProps)(CategoriesList);
