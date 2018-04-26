// after login, this is the  main page with create team & join team buttons
import React from 'react'
import {withRouter} from 'react-router-dom';





class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: ''
    }

    let authoCode;
    if (this.props.location.search.match(/code=(.*)/)) {
      authoCode = this.props.location.search.match(/code=(.*)/)[1];

    } else {
      authoCode = ""
    }
  }

  render() {

    return (

        <div className="home-area">
          <button className="create-button">Create Your Team</button>
          <button className="join-button">Join A Team</button>
          <p>{at}</p>
        </div>

    )
  }
}

export default withRouter(Home);
