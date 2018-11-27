export function fetchHeadlines() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/top_headlines')
      .then(response => response.json())
      .then(headlines => dispatch({type: 'FETCH_HEADLINE_ARTICLES', payload: headlines.articles}))
  }
}

export function fetchFilteredNews(query) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'}, query);
    return fetch('/api/search_all_news')
      .then(response => response.json())
      .then(news => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: news.articles}))
  }
}
