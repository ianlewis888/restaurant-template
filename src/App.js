import React, { Component } from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
