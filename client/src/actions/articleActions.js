// Fetching Headlines
export function fetchHeadlines() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/top_headlines')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_HEADLINE_ARTICLES', payload: articles}))
  }
}

// Fetching sources
export function fetchSources() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/sources')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_SOURCES', payload: articles}))
  }
}

//Fetch all articles relevant to search query
export function searchArticles(query) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'}, query);
    return fetch(`/api/filtered_news/${query}`)
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles}))
  }
}

//Fetch all articles relevant to search query
export function searchSourceArticles(source) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'}, source);
    return fetch(`/api/sources/${source}`)
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_SOURCE_ARTICLES', payload: articles}))
  }
}
