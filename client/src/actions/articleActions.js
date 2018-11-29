// Fetching Headlines
export function fetchHeadlines() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/top_headlines')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_HEADLINE_ARTICLES', payload: articles}))
  }
}

// Fetching sources and categories
export function fetchSources() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/sources_categories')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_SOURCES', payload: articles}))
  }
}

//Fetch all articles relevant to search query
export function fetchFilteredNews(query) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'}, query);
    return fetch('/api/search_all_news')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles}))
  }
}
