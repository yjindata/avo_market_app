import React, { Component } from 'react';
import Chat from './Chat';
import HomeExplain from './HomeExplain';
import BarChart from './BarChart';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeExplain />
        <Chat />
        <BarChart />
      </div>
    );
  }
}

export default Home;
