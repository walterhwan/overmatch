// after login, this is the  main page with create team & join team buttons
import React from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: ''
    }

    this.passAuthCodeToServer = this.passAuthCodeToServer.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);

    this.authoCode ="";
    if (this.props.location.search.match(/code=(.*)/)) {
      this.authCode = this.props.location.search.match(/code=(.*)/)[1];
      this.passAuthCodeToServer();
    } else {
      this.authCode = ""
    }
    // this.saveUserInfo();
  }

  passAuthCodeToServer() {
    axios.defaults.port = 8080;
    // debugger
    // make sure axios url is the backend route with backend port 8080
    axios.post("http://localhost:8080/api/test", {authCode: this.authCode})
      .then((res) => {
        this.updateUserInfo(res);
        this.setState({
          battleTag: res.data.battleTag
        })
      })
  }

  saveUserInfo(res) {
    // debugger
    axios.defaults.port = 8080;
    axios.post("http://localhost:8080/api/users", {authCode: this.authCode, battleTag: res.data.battleTag})
  }

  updateUserInfo(res) {
    axios.defaults.port = 8080;
    axios.put("http://localhost:8080/api/users/", {authCode: this.authCode, battleTag: res.data.battleTag})
  }

  render() {
    return (
        <div className="home-page">
        <p className="tag-location">{this.state.battleTag}</p>
          <div className="home-area">
            <button className="create-button">Create Your Team</button>
            <button className="join-button">Join A Team</button>
          </div>
        </div>

    )
  }
}

export default withRouter(Home);
