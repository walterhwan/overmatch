// after login, this is the  main page with create team & join team buttons
import React from 'react'

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    return (

        <div className="home-area">
          <button className="create-button">Create Your Team</button>
          <button className="join-button">Join A Team</button>
          
        </div>

    )
  }
}

export default Home;
