import React, { Component } from 'react';

class SourceArticles extends Component {
  componentDidMount() {
    this.props.searchArticles()
  }

  render(){
    return(
      <div>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {articles: state.articles.results}
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (this.props.match.params.id) => dispatch(searchArticles(this.props.match.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceArticles);
