import React, { Component } from 'react';
import Source from '../components/articles/Source';
import { connect } from 'react-redux';

class SourcesContainer extends Component {

  renderArticles = () => {
   return (this.props.articles.map((article, index) => {
     // return <Source key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> })
     return <div>TESTING</div> })
     )
   }

  render() {
    return(
      <div>
        {this.renderArticles()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(SourcesContainer);
