import React, { Component } from 'react';
import Chat from './Chat';
import Explain from './HomeExplain';
import BarChart from './BarChart';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
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
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <h1>Avodado market</h1>

              <Explain />
              <Chat />
              <br></br><br></br><br></br>
              <p>
                Please{' '}
                <a href
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </a>
                {' '}to check it out more dashboard!
              </p>
              <br></br><br></br>
              
            </div>
          )
        }


        
      </div>
      
      );
    }
  }

  export default Home;