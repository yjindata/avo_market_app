import React, { Component } from 'react'
import BarChart from './BarChart';
import data from '../assets/avocado.json';

export default class HomeExplain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-sm-6">
        <p>Hello! Welcome to avocado market trend app</p>
        <p>This is sample project for visualizing market trend and implementing chatbot to getting related information</p>
        <p>Currently, I'm updating authentication and improving chatbot's conversation</p>
           </div>
           <div className="col-md-6 col-sm-6">
        <img src={require('../assets/images/img_avo.jpeg')} alt="My Example" />
         </div>
        <BarChart data={data} />
    
      </div>
    )
  }
}
