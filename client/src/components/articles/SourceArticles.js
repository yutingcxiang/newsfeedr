import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSourceArticles } from '../../actions/articleActions';
import ResultsList from './ResultsList';

class SourceArticles extends Component {
  state = {
    done: false
  }

  componentDidMount() {
    this.props.searchSourceArticles(this.props.match.params.id)
      .then(() => this.setState({done: true}))
      .then(() => console.log(this.props.sourceArticles))
  }

  render(){

    return(
      <div>
        <h2>{this.props.match.params.id}</h2>
        {!this.props.done && <ResultsList results={this.props.sourceArticles}/>}
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
