export default function articlesReducer(state = {loading: false, headlines: [], sources: [], categories: []}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {...state, loading: false, headlines: action.payload.articles}

    case 'FETCH_FILTERED_ARTICLES':
      return {...state, loading: false, articles: action.payload.articles}

    case 'FETCH_SOURCES':
      const category = action.payload.sources.map(source => source.category)
      const uniqueCategory = [...new Set(category)]

      return {...state, loading: false, sources: action.payload.sources, categories: uniqueCategory}

    default:
      return state;
  }
}
