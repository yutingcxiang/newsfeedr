export function fetchHeadlines() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/top_headlines')
      .then(response => response.json())
      .then(cats => dispatch({type: 'FETCH_HEADLINE_ARTICLES', payload: articles}))
  }
}

export function fetchFilteredNews(query) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'}, query: query);
    return fetch('/api/search_all_news')
      .then(response => response.json())
      .then(cats => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles}))
  }
}
