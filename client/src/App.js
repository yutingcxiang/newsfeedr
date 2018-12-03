import React, { Component } from 'react';
import './App.css';
import HeadlinesContainer from './containers/HeadlinesContainer';
import SourcesContainer from './containers/SourcesContainer';
import SearchContainer from './containers/SearchContainer';
import Navbar from './components/layout/Navbar';
import { connect } from 'react-redux';
import moment from 'moment';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NewsFeedr</h1>
        </header>

        <Navbar />

        <footer className="App-footer">
          <h5><a href='https://newsapi.org/'>© Newsfeedr - Powered by News API</a></h5>
        </footer>
      </div>
    );
  }
}

export default App;
