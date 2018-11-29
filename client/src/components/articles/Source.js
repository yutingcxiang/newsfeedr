import React from 'react';

const Source = (props) => {
  return(
    <div>
      <h2><a href={props.url}>{props.name}</a></h2>
      <p>{props.category} | {props.country}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Source;
