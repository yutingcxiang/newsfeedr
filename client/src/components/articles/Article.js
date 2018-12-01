import React from 'react';

const Article = (props) => {
  return(
    <div>
      <h2><a href={props.url} target="_blank">{props.title}</a></h2>
      <p>{props.publishedAt}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Article;
