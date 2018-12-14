import React from 'react';
import Article from './Article';

const ArticlesList =(props) => {

  const renderArticles = () => {
    return (props.articles.map((article, index) => <Article key={index} publishedAt={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
  }

  return(
    <div id="articles-list">
      {renderArticles()}
    </div>
  )
}

export default ArticlesList;
