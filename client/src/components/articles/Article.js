import React from 'react';

const Article = ({props}) => {
  return(
    <div>
      Article
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default Article
