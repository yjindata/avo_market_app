import React, { Component } from 'react';
import Chat from './Chat';
import Explain from './HomeExplain';
import BarChart from './BarChart';

class Home extends Component {
  login = () => {
    this.props.auth.login();
  }
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              <a href style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
              Log Out
              </a>
            </h5>
            <Chat />
            <BarChart />
          </div>}
        
        {
          !isAuthenticated() && (
            <div className="container column">
              <h1>Avodado market</h1>

              <Explain />
              <Chat />
            </div>
          )
        }
      </div> 
      );
    }
  }

  export default Home;