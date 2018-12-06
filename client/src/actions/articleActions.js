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
    dispatch({type: 'LOADING_ARTICLES'});
    dispatch({type: 'SAVE_SEARCH_QUERY', payload: query})
    return fetch(`/api/filtered/${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error()
        }
          return response.json()
      })
      .then(articles => dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles}))
      .catch(error => dispatch({type: 'HANDLE_SEARCH_ERROR', payload: error}))
  }
}


//Fetch all articles relevant to search query
export function searchSourceArticles(source, page) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch(`/api/sources/${source}/${page}`)
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_SOURCE_ARTICLES', payload: articles}))
  }
}
