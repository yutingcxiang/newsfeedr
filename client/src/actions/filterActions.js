//Fetch most recent search queries
export function getRecentFilters() {
  return (dispatch) => {
    dispatch({type: 'FETCHING_FILTERS'});
    return fetch(`/api/filters`)
      .then(response => response.json())
      .then(filters => dispatch({type: 'FETCH_RECENT_FILTERS', payload: filters}))
  }
}
