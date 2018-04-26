// after login, this is the  main page with create team & join team buttons
import React from 'react'
import {withRouter} from 'react-router-dom';
// var accessTokenTest = require('../controller/accessToken');
import axios from 'axios';
// var express = require('express');
// var router = express.Router();



class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: ''
    }

    this.authoCode ="";
    if (this.props.location.search.match(/code=(.*)/)) {
      this.authCode = this.props.location.search.match(/code=(.*)/)[1];
    } else {
      this.authCode = ""
    }
    this.passAuthCodeToServer = this.passAuthCodeToServer.bind(this);
    this.passAuthCodeToServer();
  }

  passAuthCodeToServer() {
    axios.defaults.port = 8080;
    // debugger
    // make sure axios url is the backend route with backend port 8080
    axios.post("http://localhost:8080/api/test", {authCode: this.authCode}).then((res) => {
      // console.log("RESPONSE after:");
      // console.log(res);
      this.setState({
        battleTag: res.data.battleTag
      })
    })
  }

  render() {

    return (

        <div className="home-area">
          <button className="create-button">Create Your Team</button>
          <button className="join-button">Join A Team</button>
          <p>{this.state.battleTag}</p>
        </div>

    )
  }
}

export default withRouter(Home);
