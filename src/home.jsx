// after login, this is the  main page with create team & join team buttons
import React from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: ''
    }

    this.info = {};

    this.getBattleTagFromBnet = this.getBattleTagFromBnet.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.getUserInfoByBattleTag = this.getUserInfoByBattleTag.bind(this);
    this.searchBattleTagInDB = this.searchBattleTagInDB.bind(this);
    this.toTeamPage = this.toTeamPage.bind(this);

    this.authoCode ="";
    if (this.props.location.search.match(/code=(.*)/)) {
      this.authCode = this.props.location.search.match(/code=(.*)/)[1];
      this.searchBattleTagInDB(this.authCode);
    } else {
      this.authCode = ""
    }
  }

  setWelcomeMessage(battleTag) {
    document.getElementById('user-welcome').innerHTML = `Welcome ${battleTag}`;
  }

  async searchBattleTagInDB(authCode) {
    axios.defaults.port = 8080;
    const res = await axios.get(`http://localhost:8080/api/users/${authCode}`)

    if (res.data) {
      this.setState({
        battleTag: res.data.battleTag
      })
      cookies.set("battleTag", res.data.battleTag);
      this.setWelcomeMessage(res.data.battleTag);
    } else {
      this.getBattleTagFromBnet();
    }
  }


  getBattleTagFromBnet() {
    axios.defaults.port = 8080;
    // make sure axios url is the backend route with backend port 8080
    axios.post("http://localhost:8080/api/test", {authCode: this.authCode})
      .then((res) => {
        let battleTag = res.data.battleTag;
        this.saveUserInfo(res);
        this.setState({
          battleTag: battleTag
        })
        cookies.set("battleTag", battleTag);
        this.setWelcomeMessage(res.data.battleTag);
      });
  }

  saveUserInfo(res) {
    axios.defaults.port = 8080;
    axios.post('http://localhost:8080/api/users', {
      authCode: this.authCode,
      battleTag: res.data.battleTag
    });
  }

  getUserInfoByBattleTag(battleTag) {
    axios.defaults.port = 8080;
    axios.get(`http://localhost:8080/api/users/battleTag/${battleTag}`)
      .then(res => {
        // console.log(res.data);
      })
  }

  updateUserInfo(res) {
    axios.defaults.port = 8080;
    axios.put(`http://localhost:8080/api/users/${this.authCode}`, {authCode: this.authCode, battleTag: res.data.battleTag})
  }

  toTeamPage() {
    this.props.history.push('/team')
  }

  render() {
    let battleTag = this.state.battleTag;
    if (battleTag) {
      // console.log(battleTag);
      axios.post('http://localhost:8080/api/testing', {
        battleTag: battleTag
      }).then((res) => {
        // console.log(res.data);
        this.info = res.data;
      })
    }
    return (
        <div className="home-page">
          <div className="home-area">
            <button className="create-button" onClick={this.toTeamPage}>Create Your Team</button>
            <button className="join-button">Join A Team</button>
          </div>
        </div>

    )
  }
}

export default withRouter(Home);
