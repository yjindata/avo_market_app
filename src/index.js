import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports' 
import Amplify from 'aws-amplify' 
Amplify.configure(config)


ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
