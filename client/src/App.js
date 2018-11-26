import React, { Component } from 'react';
import './App.css';
import ArticlesContainer from './containers/ArticlesContainer'
import FiltersContainer from './containers/FiltersContainer'
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NewsFeedr</h1>
        </header>

        <Navbar />
        <FiltersContainer />
        <ArticlesContainer />

        <footer className="App-footer">
          <p>© Newsfeedr - Powered by News API</p>
        </footer>
      </div>
    );
  }
}

export default App;
