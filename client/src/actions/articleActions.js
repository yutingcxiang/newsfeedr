export function fetchHeadlines() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/top_headlines')
      .then(response => response.json())
      .then(cats => dispatch({type: 'FETCH_HEADLINE_ARTICLES', payload: articles}))
  }
}
