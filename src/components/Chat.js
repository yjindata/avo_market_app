import React, { Component } from "react";
import { ChatBot } from "aws-amplify-react";

class Home extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("Bot conversation failed");
      return;
    }
    alert(`Success: ${JSON.stringify(confirmation, null, 2)}`);
    return "Reservation booked. Thank you! What would you like to do next?";
  }
  // need to implement conversation slots

  render() {
    return (
      <div>
        <ChatBot
          title="Avot"
          botName="avotMOBILEHUB"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete
        />
      </div>
    );
  }
}

export default Home;
