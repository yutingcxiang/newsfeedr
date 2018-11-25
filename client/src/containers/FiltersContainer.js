import React, { Component } from 'react';
import CountryFilter from '../components/filters/CountryFilter';
import PublisherFilter from '../components/filters/PublisherFilter';
import QueryFilter from '../components/filters/QueryFilter';

class FiltersContainer extends Component {
  render() {
    return(
      <div>
        Filters Here!
        <CountryFilter />
        <PublisherFilter />
        <QueryFilter />
      </div>
    )
  }
}

export default FiltersContainer
