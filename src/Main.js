//it it not implemented yet
import React from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./components/Chat"
  import Barchart from "./components/BarChart";

class Main extends React.Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">      
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/barchart">Market trend</NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/barchart" component={Barchart}/>
          </div>
         <div >
        </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;