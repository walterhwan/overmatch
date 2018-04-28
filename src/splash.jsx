import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="center-content">
          <p className="welcome-msg">Create or Join Your Winning Team before You Sign in to the Watch!</p>
          <button className = "bnet-button">
            <a className="bnet-link" href="http://localhost:8080/auth/bnet">
              Log in with Battle.net
            </a>
          </button>
        </div>
      </div>
    )
  }
}

export default SplashPage;
