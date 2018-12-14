export default function articlesReducer(state = {loading: false, filters: []}, action) {
  switch (action.type) {
    case 'FETCHING_FILTERS':
      return {...state, loading: true}

    case 'FETCH_RECENT_FILTERS':
      const unique = [...new Set(action.payload)]
      return {...state, loading: false, filters: action.payload}

    default:
      return state;
    }
}
