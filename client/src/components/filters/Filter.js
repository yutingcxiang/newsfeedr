import React from 'react';

const Filter = (props) => {

  return(
    <React.Fragment>
      <p className="ui label">{props.query}</p>
    </React.Fragment>
  )
}

export default Filter;
