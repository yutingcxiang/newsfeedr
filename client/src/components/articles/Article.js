import React from 'react';
import Moment from 'react-moment';

const Article = (props) => {
  return(
    <div>
      <h3 className="ui medium header"><a href={props.url} target="_blank" rel="noopener noreferrer"> {props.title}</a></h3>
      <div className="ui label"><Moment format="MM/DD/YYYY h:mm A">{props.publishedAt}</Moment></div> {props.description}
      <div className="ui section divider"></div>
    </div>
  )
}

export default Article;
