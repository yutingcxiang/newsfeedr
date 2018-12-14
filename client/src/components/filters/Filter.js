import React from 'react';
import Moment from 'react-moment';

const Filter = (props) => {
  return(
    <React.Fragment>
      <a class="ui tag label">{props.query}</a>
    </React.Fragment>
  )
}

export default Filter;
