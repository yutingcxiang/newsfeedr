import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />

        <footer className="App-footer">
          <h5><a id="attribution-link" href='https://newsapi.org/'>© Newsfeedr - Powered by News API</a></h5>
        </footer>
      </div>
    );
  }
}

export default App;
