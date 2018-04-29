// after login, this is the  main page with create team & join team buttons
import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const api_url = "http://localhost:8080";

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
    axios.defaults.port = 8080;
    const res = await axios.get(`${api_url}/api/users/${authCode}`)

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
    axios.post(`${api_url}/api/test`, {authCode: this.authCode})
      .then((res) => {
        let battleTag = res.data.battleTag;
        // console.log(battleTag);
        this.getUserInfo(battleTag).then(res2 => {
            // console.log(res2);
            if (res2.data === null) {
              // console.log('saveUserInfo');
              this.saveUserInfo(battleTag);
            } else {
              // console.log('updateUserInfo');
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
    axios.defaults.port = 8080;
    axios.post(`${api_url}/api/users`, {
      authCode: this.authCode,
      battleTag: battleTag
    });
  }

  getUserInfo(battleTag) {
    axios.defaults.port = 8080;
    let battleTag2 = battleTag.replace('#', '-');
    return axios.get(`${api_url}/api/users/battleTag/${battleTag2}`)
  }

  updateUserInfo(battleTag) {
    axios.defaults.port = 8080;
    let battleTag2 = battleTag.replace('#', '-');
    axios.put(`${api_url}/api/users/battleTag/${battleTag2}`, {
      authCode: this.authCode,
    });
  }

  toTeamPage() {
    this.saveInitialTeamInfoWithCreator('', [], 1);
  }

  saveInitialTeamInfoWithCreator(role, heros, number_of_players) {
    let default_team_name = cookies.get("battleTag").match(/(.*)\#/)[1];
    // console.log(default_team_name);
    // console.log(`${default_team_name}'s Team`);
    axios.defaults.port = 8080;
    axios.post(`${api_url}/api/teams` , {role: role, heros: heros, number_of_players: number_of_players, team_name: `${default_team_name}'s Team`} )
      .then((res) => {
        // console.log(res.data._id);

        // update user team_id
        let battleTag = cookies.get("battleTag").replace('#', '-');
        // console.log(battleTag);
        axios.defaults.port = 8080;
        axios.put(`${api_url}/api/users/battleTag/${battleTag}`, {
          battleTag: cookies.get('battleTag'),
          team_id: res.data._id,
        });

        // redirect to team page
        this.props.history.push(`/team/${res.data._id}`);
      });
  }

  toTeamIndex() {
    this.props.history.push('/teams');
  }

  render() {
    let battleTag = this.state.battleTag;
    if (battleTag) {
      axios.post(`${api_url}/api/testing`, {
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
