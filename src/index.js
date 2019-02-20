import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
// import Chat from './components/Chat';
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import config from "./aws-exports"; // new
import Amplify from "aws-amplify";
// new
Amplify.configure(config); // new

ReactDOM.render(<Home />, document.getElementById("root"));

serviceWorker.unregister();
