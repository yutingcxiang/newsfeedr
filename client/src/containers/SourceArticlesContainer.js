import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../actions/articleActions';
import ArticlesList from '../components/articles/ArticlesList';
// import Pagination from '../components/layout/Pagination';

class SourceArticlesContainer extends Component {
  state = {
    page: 1
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
  }

  nextPage = () => {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    }, () => {
        this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
    })
    window.scrollTo(0, 0)
  }

  previousPage = () => {
    if (this.state.page > 1) {
    this.setState(prevState => {
      return {page: prevState.page - 1}
    }, () => {
      this.props.searchSourceArticles(this.props.match.params.id, this.state.page)
    })
    }
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div>
        <div id="source-name">
          <div className="ui blue label">
            <h3>{this.props.location.state.name}</h3>
          </div>
        </div>

        <div className="ui section divider"></div>
        <ArticlesList articles={this.props.sourceArticles} source={this.props.match.params.id}/>

        {/* {<Pagination page={this.state.page} previousPage={this.previousPage} nextPage={this.nextPage}/>} */}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {sourceArticles: state.articles.sourceArticles}
}

const mapDispatchToProps = dispatch => {
  return {
    searchSourceArticles: (source, page) => dispatch(searchSourceArticles(source, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceArticlesContainer);
