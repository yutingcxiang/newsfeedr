import React, { Component } from 'react';
import './App.css';
import ArticlesContainer from './containers/ArticlesContainer'
import FiltersContainer from './containers/FiltersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NewsFeedr</h1>
          <FiltersContainer />
          <ArticlesContainer />
        </header>
      </div>
    );
  }
}

export default App;
