import React from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./components/Home";
  import Contact from "./components/Contact";
  import About from "./components/About";

class Main extends React.Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">      
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>        
          </ul>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        <div >

        </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;