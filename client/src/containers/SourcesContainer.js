import React, { Component } from 'react';
import Source from '../components/articles/Source';
import Category from '../components/articles/Category';
import { connect } from 'react-redux';

class SourcesContainer extends Component {

  renderSources = () => {
   return (this.props.sources.map((source, index) => {
     return <Source key={index} name={source.name} description={source.description} url={source.url} category={source.category} country={source.country} /> })
     )
   }

   renderCategories = () => {
    return (this.props.categories.map(category => <Category name={category}/>))
    }

  render() {
    return(
      <div>
        <div>
          {this.renderSources()}
        </div>
        <ul>
          {this.renderCategories()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sources: state.articles.sources,
    categories: state.articles.categories
  }
}

export default connect(mapStateToProps)(SourcesContainer);
