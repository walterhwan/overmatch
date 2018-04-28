import React from 'react';
import axios from 'axios';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <div className="center-content">
          <p className="welcome-msg">Create or Join Your Winning Team before You Sign in to the Watch!</p>
          <a className="bnet-link" href="http://localhost:8080/auth/bnet">
            <button className = "bnet-button">Log in with Battle.net</button>
          </a>
        </div>
      </div>
    )
  }
}

export default SplashPage;
