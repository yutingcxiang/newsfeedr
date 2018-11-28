import React from 'react';

const Category = (props) => {
  return(
    <div>
      <h2><a href={props.url}>{props.title.split("-")[0]}</a></h2>
      <p>{props.publishedAt} | {props.title.split("-")[1]}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Category;
