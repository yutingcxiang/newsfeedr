import React from 'react';
import Moment from 'react-moment';

const Article = (props) => {
  return(
    <div>
      <h3><a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <p><Moment format="MM/DD/YYYY h:mm a">{props.publishedAt}</Moment> - {props.description}</p>
      <br></br>
    </div>
  )
}

export default Article;
