import React from 'react';
import axios from 'axios';
// import { AuthRoute, ProtectedRoute } from './util/route_util';
// import { ProtectedRoute } from './util/route_util';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
    }

    axios.get(`http://localhost:8080/api/teams`)
      .then((res) => {
        this.setState({
          teams: res.data,
        })
      })
  }

  renderATeam(team) {
    let teanName = team.team_name;
    return (
      <li className='team-li' key={team._id}>
        <p className='team-id'>{teanName}</p>
        <p className='team-comp'>2 Tanks 2 Offense 2 Support</p>
        <p className='team-player-num'>{team.number_of_players} / 6</p>
      </li>
    );
  }

  render() {
    return (
      <main className='team-index'>
        <h1 className='join-a-team-text'>Join A Team</h1>
        <ul className='team-ul'>
          {this.state.teams.map((team) => this.renderATeam(team))}
        </ul>
      </main>
    );
  }
}


export default TeamIndex;
