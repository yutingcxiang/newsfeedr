import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecentFilters } from '../../actions/filterActions';
import Filter from './Filter';

class RecentFilters extends Component {
  componentDidMount(){
    this.props.getRecentFilters()
  }

  renderFilters = () => {
    return (this.props.filters.map((filter, index) => <Filter key={index} query={filter.query} searchFilter={this.props.searchArticles}/> ))
  }

  render() {
    return(
      <div id="recent-filters">
        {this.renderFilters()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {filters: state.filters.filters}
}

const mapDispatchToProps = dispatch => {
  return {
    getRecentFilters: () => dispatch(getRecentFilters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentFilters);
