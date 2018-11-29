export default function articlesReducer(state = {loading: false, headlines: [], sources: []}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {...state, loading: false, headlines: action.payload.articles}

    // case 'FETCH_FILTERED_ARTICLES':
    //   return {...state, loading: false, articles: action.payload.articles}

    case 'FETCH_SOURCES':
      return {...state, loading: false, sources: action.payload.sources}

    default:
      return state;
  }
}
