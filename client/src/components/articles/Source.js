import React from 'react';

const Source = (props) => {
  return(
    <div>
      <h3><a href={props.url}>{props.name}</a></h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Source;
