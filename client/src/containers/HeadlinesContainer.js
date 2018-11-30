import React, { Component } from 'react';
import Article from '../components/articles/Article';
import { connect } from 'react-redux';

class HeadlinesContainer extends Component {

  renderNews = () => {
    return (this.props.articles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  render() {
    return(
      <div>
        {this.renderNews()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.headlines}
}

export default connect(mapStateToProps)(HeadlinesContainer);
