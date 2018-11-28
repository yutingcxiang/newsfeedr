import React, { Component } from 'react';
import './App.css';
import HeadlinesContainer from './containers/HeadlinesContainer';
import SourcesContainer from './containers/SourcesContainer';
import CategoriesContainer from './containers/CategoriesContainer';
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
        
        <footer className="App-footer">
          <h5>© Newsfeedr - Powered by News API</h5>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {articles: state.articles.articles}
}

const mapDispatchToProps = dispatch => {
  return { fetchHeadlines: () => dispatch(fetchHeadlines())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
