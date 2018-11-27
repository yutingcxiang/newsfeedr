import React, { Component } from 'react';
import './App.css';
import ArticlesContainer from './containers/ArticlesContainer';
import FiltersContainer from './containers/FiltersContainer';
import Navbar from './components/layout/Navbar';
import { connect } from 'react-redux';
import { fetchHeadlines } from './actions/articleActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchHeadlines("us")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NewsFeedr</h1>
        </header>

        <Navbar />
        <FiltersContainer />
        <ArticlesContainer articles={this.props.articles}/>

        <footer className="App-footer">
          <p>© Newsfeedr - Powered by News API</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {articles: state.articles}
}

const mapDispatchToProps = dispatch => {
  return { fetchHeadlines: () => dispatch(fetchHeadlines())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
