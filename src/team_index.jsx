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
    let teamId = team._id;
    return (
      <li key={team._id}>
        <h1>Team ID: {teamId.slice(0, 4)}</h1>
        <p>{team.number_of_players} / 6</p>
      </li>
    );
  }

  render() {
    return (
      <main>
        <ul>
          {this.state.teams.map((team) => this.renderATeam(team))}
        </ul>
      </main>
    );
  }
}


export default TeamIndex;
