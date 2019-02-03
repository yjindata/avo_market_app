import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
//import Chat from './components/Chat';
import './index.css';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports' // new
import Amplify from 'aws-amplify' // new
Amplify.configure(config) // new

ReactDOM.render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
