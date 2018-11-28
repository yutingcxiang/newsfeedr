import React, { Component } from 'react';
import Headline from '../components/articles/Headline';
import { connect } from 'react-redux';

class HeadlinesContainer extends Component {

  renderHeadlines = () => {
   return (this.props.articles.map((article, index) => {
     return <Headline key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> })
     )
   }

  render() {
    return(
      <div>
        {this.renderHeadlines()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

export default connect(mapStateToProps)(HeadlinesContainer);
