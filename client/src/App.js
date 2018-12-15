import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollUpButton from './components/layout/ScrollUpButton';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="App">
          <Navbar />
          <Footer />
          <ScrollUpButton />
        </div>
      </div>
    );
  }
}

export default App;
