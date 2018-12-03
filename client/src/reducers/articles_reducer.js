export default function articlesReducer(state = {loading: false, headlines: [], sources: [], sourceArticles: [], results:[], error: {}}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {...state, loading: false, headlines: action.payload.articles}

    case 'FETCH_FILTERED_ARTICLES':
      return {...state, loading: false, results: action.payload.articles}

    case 'FETCH_SOURCE_ARTICLES':
      return {...state, loading: false, sourceArticles: action.payload.articles}

    case 'FETCH_SOURCES':
      return {...state, loading: false, sources: action.payload.sources}

    default:
      return state;
  }
}
