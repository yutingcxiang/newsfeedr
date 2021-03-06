export default function articlesReducer(state = {loading: false, headlines: [], sources: [], sourceArticles: [], results:[], numResults: false, query: '', searchDone: false}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {...state, loading: false, headlines: action.payload.articles}

    case 'FETCH_FILTERED_ARTICLES':
      return {...state, loading: false, results: action.payload.articles, numResults: action.payload.totalResults, searchDone: true}

    case 'FETCH_SOURCE_ARTICLES':
      return {...state, loading: false, sourceArticles: action.payload.articles}

    case 'FETCH_SOURCES':
      return {...state, loading: false, sources: action.payload.sources}

    case 'HANDLE_SEARCH_ERROR':
      return {...state, loading: false, results: [], numResults: action.payload.totalResults, searchDone: true}

    case 'SAVE_SEARCH_QUERY':
      return {...state, loading: false, query: action.payload}

    default:
      return state;
  }
}
