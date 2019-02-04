import React, { Component } from 'react'
import BarChart from './BarChart';
import data from '../assets/avocado.json';

export default class HomeExplain extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-sm-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum lectus est,
           eget faucibus eros porta id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum lectus est,
           eget faucibus eros porta id.</p>
           </div>
           <div className="col-md-6 col-sm-6">
        <img src={require('../assets/images/img_avo.jpeg')} alt="My Example" />
         </div>
        <BarChart data={data} />
    
      </div>
    )
  }
}
