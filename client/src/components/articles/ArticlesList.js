import React from 'react';
import Article from './Article';

const ArticlesList =(props) => {

  const renderArticles = () => {
    if (!props.articles === undefined) {
      return (props.articles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    } else {
      return (<div></div>)
    }
  }

  return(
    <div id="articles-list">
      {renderArticles()}
    </div>
  )
}

export default ArticlesList;
