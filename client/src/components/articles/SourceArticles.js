import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../../actions/articleActions';
import ResultsList from './ResultsList';

class SourceArticles extends Component {
  constructor(){
    super()
    this.state = {
      sourceArticles: ''
    }
  }

  componentWillMount() {
    this.props.searchSourceArticles(this.props.match.params.id)
  }

  render(){
    const sourceArticles = this.state.sourceArticles

    return(
      <div>
        <h2>{this.props.match.params.id}</h2>
        {sourceArticles.length > 0 && <ResultsList results={this.props.sourceArticles}/>}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {sourceArticles: state.articles.sourceArticles}
}

const mapDispatchToProps = dispatch => {
  return {
    searchSourceArticles: (source) => dispatch(searchSourceArticles(source))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceArticles);
