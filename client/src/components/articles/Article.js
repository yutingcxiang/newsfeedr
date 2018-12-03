import React from 'react';
import Moment from 'react-moment';

const Article = (props) => {
  return(
    <div>
      <h2><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h2>
      <p><Moment format="DD/MM/YYYY h:mm a">{props.publishedAt}</Moment></p>
      <p>{props.description}</p>
      <br></br>
    </div>
  )
}

export default Article;
