// after login, this is the  main page with create team & join team buttons
import React from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();
const api_url = "http://localhost:8080";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: '',
      role: '',
      heros: []
    }

    this.info = {};

    this.getBattleTagFromBnet = this.getBattleTagFromBnet.bind(this);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.searchBattleTagInDB = this.searchBattleTagInDB.bind(this);
    this.toTeamPage = this.toTeamPage.bind(this);
    this.saveInitialTeamInfoWithCreator = this.saveInitialTeamInfoWithCreator.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.selectHeros = this.selectHeros.bind(this);
    this.updateRole = this.updateRole.bind(this);

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
      // cookies.set("battleTag", res.data.battleTag);
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
        console.log(battleTag);
        this.getUserInfo(battleTag).then(res2 => {
            console.log(res2);
            if (res2.data === null) {
              console.log('saveUserInfo');
              this.saveUserInfo(battleTag);
            } else {
              console.log('updateUserInfo');
              this.updateUserInfo(battleTag)
            }
          })
        this.setState({
          battleTag: battleTag
        })
        // cookies.set("battleTag", battleTag);
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
    axios.defaults.port = 8080;
    axios.post(`${api_url}/api/teams` , {role: role, heros: heros, number_of_players: number_of_players})
      .then((res) => {
        console.log(res.data._id);

        // update user team_id
        let battleTag = 'Test-123abc';
        console.log(battleTag);
        axios.defaults.port = 8080;
        axios.put(`${api_url}/api/users/battleTag/${battleTag}`, {
          battleTag: battleTag,
          team_id: res.data._id,
        });

        // redirect to team page
        this.props.history.push(`/team/${res.data._id}`);
      });
  }

  heroSelector() {
    // const heros = ["Doomfist", "Genji", "McCree", "Pharah", "Reaper"];
    return (
      <div>
        <select id="heroSelect" onChange={this.selectHeros}>
          <option selected disabled>Choose your hero</option>
          <option value='Doomfist'>Doomfist</option>
          <option value='Genji'>Genji</option>
          <option value='McCree'>McCree</option>
          <option value='Pharah'>Pharah</option>
          <option value='Reaper'>Reaper</option>
        </select>
      </div>
    )
    let ops = document.getElementById("heroSelect").getElementsByTagName("option");
    for (let i = 0; i < ops.length; i++) {
      (this.state.heros.includes(ops[i].value))
      ? ops[i].disabled = true
      : ops[i].disabled = false ;
    }
    // for (let i=0; i<heros.length; i++) {
    //   let x = document.getElementById("heroSelect");
    //   let option = document.createElement("option");
    //   option.text = heros[i];
    //   x.add(option);
    // }
  }

  updateRole(e) {
    this.setState({ role: e.target.value })
  }

  selectHeros() {
    return (e) => this.setState({ heros: this.state.heros.push(e.target.value) })
    debugger;
  }

  // updateHero() {
  //   (e) => {
  //     if (!this.state.heros.includes(e.target.value)) {
  //       return (e) => this.setState({ heros: this.state.heros.push(e.target.value) })
  //     }
  //   }
  // }

  openModal() {
    document.getElementById('modal').classList.add("join-game-modal");
  }

  closeModal() {
    document.getElementById('modal').classList.remove("join-game-modal");
  }

  handleSubmit(e) {
    e.preventDefault();

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
          <button className="create-button" onClick={this.toTeamPage}>Create Your Team</button>
          <button className="join-button" onClick={this.openModal}>Join A Team</button>
          <div id="modal" className="modal">
            <div className="modal-ui">
              <form className="join-game-form" onSubmit={this.handleSubmit}>
                <span className="modal-close" onClick={this.closeModal}>&times;</span>
                <h2>Please Choose your Preferences</h2>
                <div className="join-game-role">
                  <h3>Role:</h3>
                  <select onChange={this.updateRole}>
                    <option value='Tank'>Tank</option>
                    <option value='Support'>Support</option>
                    <option value='Offense'>Offense</option>
                    <option value='Defense'>Defense</option>
                  </select>
                </div>
                <div className="join-game-heros">
                  <h3>Heros:</h3>
                    <p>Hero 1</p>
                    {this.heroSelector()}
                    <p>Hero 2</p>
                    {this.heroSelector()}
                    <p>Hero 3</p>
                    {this.heroSelector()}
                </div>
                <input type="submit" value="Continue" className="join-game-submit" />
              </form>
            </div>
            <div className="modal-screen" onClick={this.closeModal}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
