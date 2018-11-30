import React from 'react';

const Article = (props) => {
  return(
    <div>
      <h2><a href={props.url} target="_blank">{props.title.split("-")[0]}</a></h2>
      <p>{props.publishedAt} | {props.title.split("-")[1]}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Article;
