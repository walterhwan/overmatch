import React from 'react';
import PlayerStats from './player_stats';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

// const API_URL = "http://localhost:8080";
const API_URL = "https://overmatch-api.herokuapp.com";
// const API_URL = process.env.API_URL;

class PlayerInfo extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      userInfo: this.props.userInfo,
      battleTag: this.props.battleTag,
      pos: this.props.pos
    }

    // debugger
    this.handleHeroSelect = this.handleHeroSelect.bind(this);
    this.handleRoleSelect = this.handleRoleSelect.bind(this);
    this.updateTeamDB = this.updateTeamDB.bind(this);

    // get team id from url:
    this.team_id ="";
    if (this.props.location.pathname.match(/team\/(.*)/)) {
      this.team_id = this.props.location.pathname.match(/team\/(.*)/)[1];
    } else {
      this.team_id = "";
    }

  }

  updateTeamDB (hero, role) {
    axios.put(`${API_URL}/api/teams/${this.team_id}`, {
      heros: hero,
      role: role,
      battleTag: this.props.battleTag,
      pos_index: this.props.pos,
    });
  }

  handleHeroSelect(e) {
    this.updateTeamDB(e.target.value, "")
  }

  handleRoleSelect(e) {
    this.updateTeamDB([], e.target.value)
    //swap role icon
    // const image = document.getElementById("role-icon");
    // image.src = `../images/${e.target.value.toLowerCase()}Icon.png`
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      battleTag: nextProps.battleTag,
    }
  }

  render() {
    // debugger
    return (
      <li className='player smooth-border' id='player-1'>
        <div className='hero-div'>
          <h1>Hero</h1>
          <div className='hero-select'>
            <select className="hero-dropdown" onChange={this.handleHeroSelect}>
              <option value='Doomfist'>Doomfist</option>
              <option value='Genji'>Genji</option>
              <option value='McCree'>McCree</option>
              <option value='Pharah'>Pharah</option>
              <option value='Reaper'>Reaper</option>
            </select>
          </div>
        </div>
        <div className='role-div'>
          <h1>Role</h1>
          <div className='role-select'>
            <select className="role-dropdown" onChange={this.handleRoleSelect}>
              <option value='Tank'>Tank</option>
              <option value='Support'>Support</option>
              <option value='Offense'>Offense</option>
              <option value='Defense'>Defense</option>
            </select>
          </div>
        </div>
        <PlayerStats
          team_id={this.team_id}
          pos={this.state.pos}
          battleTag={this.state.battleTag || ""}
          userInfo={this.state.userInfo}/>
      </li>
    );
  }
}

export default withRouter(PlayerInfo);
