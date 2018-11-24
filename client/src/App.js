import React, { Component } from 'react';
import './App.css';
import './containers/ArticlesContainer.js'
import './containers/FilterContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NewsFeedr</h1>
          <FilterContainer />
          <ArticlesContainer />
        </header>
      </div>
    );
  }
}

export default App;
