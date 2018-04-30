import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const API_URL = "https://overmatch-api.herokuapp.com";

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    }

    axios.get(`${API_URL}/api/teams`)
      .then((res) => {
        this.setState({
          teams: res.data,
        })
      })

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(team) {
    return (e) => {
      this.props.history.push(`/team/${team._id}`)
    };
  }

  renderTeam(team) {
    let teanName = team.team_name;
    return (
      <li className='team-li' onClick={this.handleOnClick(team)} key={team._id}>
        <p className='team-id'>{teanName}</p>
        <p className='team-comp'>2 Tanks 2 Offense 2 Support</p>
        <p className='team-player-num'>{team.number_of_players || 0} / 6</p>
      </li>
    );
  }

  render() {
    return (
      <main className='team-index'>
        <h1 className='join-a-team-text'>Join A Team</h1>
        <ul className='team-ul'>
          {this.state.teams.map((team) => this.renderTeam(team))}
        </ul>
      </main>
    );
  }
}


export default withRouter(TeamIndex);
