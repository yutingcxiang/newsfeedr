export default function articlesReducer(state = {loading: false, articles: []}, action) {
  switch (action.type) {
    case 'LOADING_ARTICLES':
      console.log(action.payload);
      return {...state, loading: true}

    case 'FETCH_HEADLINE_ARTICLES':
      return {...state, loading: false, articles: action.payload}

    case 'FETCH_FILTERED_ARTICLES':
      return {...state, loading: false, articles: action.payload}

    default:
      return state;
  }
}
