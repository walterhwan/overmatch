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

    this.getBattleTagFromBnet = this.getBattleTagFromBnet.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.searchBattleTagInDB = this.searchBattleTagInDB.bind(this);

    this.authoCode ="";
    if (this.props.location.search.match(/code=(.*)/)) {
      this.authCode = this.props.location.search.match(/code=(.*)/)[1];

    this.searchBattleTagInDB(this.authCode);
      // this.getBattleTagFromBnet();
      // this.getUserInfo();
    } else {
      this.authCode = ""
    }
    // this.saveUserInfo();
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   if(newProps.location.search.match(/code=(.*)/)[1]) {
  //     this.getUserInfo(newProps.location.search.match(/code=(.*)/)[1])
  //   }
  // }
  async searchBattleTagInDB(authCode) {
    axios.defaults.port = 8080;
    const res = await axios.get(`http://localhost:8080/api/users/${authCode}`)

    if (res.data) {
      this.setState({
        battleTag: res.data.battleTag
      })
    } else {
      this.getBattleTagFromBnet();
    }
  }


  getBattleTagFromBnet() {
    axios.defaults.port = 8080;
    // make sure axios url is the backend route with backend port 8080
    axios.post("http://localhost:8080/api/test", {authCode: this.authCode})
      .then((res) => {
        this.saveUserInfo(res);
        this.setState({
          battleTag: res.data.battleTag
        })
      });
  }

  saveUserInfo(res) {
    // debugger
    axios.defaults.port = 8080;
    let currentUser;
    axios.post('http://localhost:8080/api/users', {
      authCode: this.authCode,
      battleTag: res.data.battleTag
    });
  }

  getUserInfo() {
    axios.defaults.port = 8080;
    axios.get(`http://localhost:8080/api/users/${this.authCode}`)
        .then(res => {
          console.log(res.data);
          // this.bt = res.data;
        })
  }

  updateUserInfo(res) {
    axios.defaults.port = 8080;
    axios.put(`http://localhost:8080/api/users/${this.authCode}`, {authCode: this.authCode, battleTag: res.data.battleTag})
  }

  render() {

    // debugger
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
