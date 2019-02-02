import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import data from './assets/avocado.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Avocado trend</h1>
        <BarChart data ={data} />
      </div>
    );
  }
}

export default App;
