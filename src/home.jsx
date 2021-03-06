// after login, this is the  main page with create team & join team buttons
import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// const API_URL = "http://localhost:8080";
const API_URL = "https://overmatch-api.herokuapp.com";
// var API_URL = process.env.API_URL;

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
    this.searchBattleTagInDB = this.searchBattleTagInDB.bind(this);
    this.toTeamPage = this.toTeamPage.bind(this);
    this.saveInitialTeamInfoWithCreator = this.saveInitialTeamInfoWithCreator.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.toTeamIndex = this.toTeamIndex.bind(this);

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
    // axios.defaults.port = 8080;
    const res = await axios.get(`${API_URL}/api/users/${authCode}`)

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
    // axios.defaults.port = 8080;
    // make sure axios url is the backend route with backend port 8080
    axios.post(`${API_URL}/api/test`, {authCode: this.authCode})
      .then((res) => {
        let battleTag = res.data.battleTag;
        this.getUserInfo(battleTag).then(res2 => {
            if (res2.data === null) {
              this.saveUserInfo(battleTag);
            } else {
              this.updateUserInfo(battleTag)
            }
          })
        this.setState({
          battleTag: battleTag
        })
        cookies.set("battleTag", battleTag);
        this.setWelcomeMessage(res.data.battleTag);
      });
  }

  saveUserInfo(battleTag) {
    // axios.defaults.port = 8080;
    axios.post(`${API_URL}/api/users`, {
      authCode: this.authCode,
      battleTag: battleTag
    });
  }

  getUserInfo(battleTag) {
    // axios.defaults.port = 8080;
    let battleTag2 = battleTag.replace('#', '-');
    return axios.get(`${API_URL}/api/users/battleTag/${battleTag2}`)
  }

  updateUserInfo(battleTag) {
    // axios.defaults.port = 8080;
    let battleTag2 = battleTag.replace('#', '-');
    axios.put(`${API_URL}/api/users/battleTag/${battleTag2}`, {
      authCode: this.authCode,
    });
  }

  toTeamPage() {
    this.saveInitialTeamInfoWithCreator('', [], 1);
  }

  saveInitialTeamInfoWithCreator(role, heros, number_of_players) {
    let battleTag = cookies.get("battleTag");
    let default_team_name = battleTag.match(/(.*)\#/)[1]; // eslint-disable-line no-useless-escape

    // axios.defaults.port = 8080;
    axios.post(`${API_URL}/api/teams` , {role: role, heros: heros, battleTag: battleTag, number_of_players: number_of_players, team_name: `${default_team_name}'s Team`} )
      .then((res) => {

        // update user team_id
        let battleTag2 = battleTag.replace('#', '-');
        // console.log(battleTag);
        // axios.defaults.port = 8080;
        axios.put(`${API_URL}/api/users/battleTag/${battleTag2}`, {
          battleTag: battleTag,
          team_id: res.data._id,
        });

        this.props.history.push(`/team/${res.data._id}`);
      });
  }

  toTeamIndex() {
    this.props.history.push('/teams');
  }

  render() {
    let battleTag = this.state.battleTag;
    if (battleTag) {
      axios.post(`${API_URL}/api/testing`, {
        battleTag: battleTag
      }).then((res) => {
        this.info = res.data;
      })
    }
    return (
        <div className="home-page">
          <div className="home-area">
            <button
              className="create-button"
              onClick={this.toTeamPage}>Create Your Team</button>
            <button
              className="join-button"
              onClick={this.toTeamIndex}>Join A Team</button>
          </div>
        </div>

    )
  }
}

export default withRouter(Home);
