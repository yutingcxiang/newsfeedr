export default function articlesReducer(state = {loading: false, pictures: []}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {loading: false, articles: action.payload.articles}

    case 'FETCH_FILTERED_ARTICLES':
      return {loading: false, articles: action.payload.articles}

    default:
      return state;
  }
}
