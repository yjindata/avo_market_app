import React, { Component } from 'react';
import Chat from './Chat';
import Explain from './HomeExplain';

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
         
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <h1>Avodado market</h1>

              <Explain />
              <br></br><br></br><br></br>
              <h5>
                Please{' '}
                <a href
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </a>
                {' '}to check chatbot!
              </h5>
              <br></br><br></br>
              
            </div>
          )
        }


        
      </div>
      
      );
    }
  }

  export default Home;