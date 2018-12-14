export default function articlesReducer(state = {loading: false, filters: []}, action) {
  switch (action.type) {
    case 'FETCHING_FILTERS':
      return {...state, loading: true}

    case 'FETCH_RECENT_FILTERS':
      const filters = action.payload.map((payload) => payload.query)
      const unique = [...new Set(filters)]
      return {...state, loading: false, filters: unique}

    default:
      return state;
    }
}
