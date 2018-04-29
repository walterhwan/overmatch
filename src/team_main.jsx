import React from 'react';
import PlayerInfo from './player_info';
import axios  from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// import { HashRouter, Route, withRouter, Link, NavLink, Switch } from 'react-router-dom';
const API_URL = "https://overmatch-api.herokuapp.com";
// const API_URL = "http://localhost:8080";
// const API_URL = process.env.API_URL;

class TeamMain extends React.Component {
  constructor(props) {
    super(props);

    this.fetchTeamInfo = this.fetchTeamInfo.bind(this);

    let currentUserBattleTag = cookies.get('battleTag');
    this.state = {
      battleTagIndex: [currentUserBattleTag, "", "", "", "", ""],
      team: {},
    }

    this.team_id ="";
    if (this.props.location.pathname.match(/team\/(.*)/)) {
      this.team_id = this.props.location.pathname.match(/team\/(.*)/)[1];
    } else {
      this.team_id = "";
    }
    this.fetchTeamInfo(this.team_id);
  }

  fetchTeamInfo(team_id) {
    // axios.defaults.port = 8080;
    axios.get(`${API_URL}/api/teams/${team_id}`)
      .then(res => {
        this.setState({ team: res.data });
      })
  }

  render() {
    return (
      <main className='team-main'>
        <div className='team-div'>
          <h1 className='team-name'>{this.state.team.team_name}</h1>
          <ul className='team-members'>
            {
              this.state.battleTagIndex.map((tag, idx) => <PlayerInfo
                battleTag={tag}
                key={`battleTag-${idx}`} pos={idx}/>)
            }
          </ul>
        </div>
      </main>
    )
  }
}

export default TeamMain;
