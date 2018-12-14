import React from 'react';
import Filter from './Filter';

const RecentFilters = (props) => {

  const renderFilters = () => {
    return (props.filters.map((filter, index) => <Filter key={index} query={filter}/> ))
  }

    return(
      <div id="recent-filters">
        <p>Need ideas? Try searching these:</p>
        {renderFilters()}
      </div>
    )
}

export default RecentFilters;
