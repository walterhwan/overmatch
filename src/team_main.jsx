import React from 'react';
import PlayerInfo from './player_info';
import axios  from 'axios';
const API_URL = "https://overmatch-api.herokuapp.com";

class TeamMain extends React.Component {
  constructor(props) {
    super(props)

    this.fetchTeamInfo = this.fetchTeamInfo.bind(this);
    this.state = {
      battleTagIndex: ["", "", "", "", "", ""],
      userInfoIndex: [{}, {}, {}, {}, {}, {}],
      team: {},
    }

    this.team_id ="";
    if (this.props.location.pathname.match(/team\/(.*)/)) {
      this.team_id = this.props.location.pathname.match(/team\/(.*)/)[1];
    } else {
      this.team_id = "";
    }
    // debugger
    this.fetchTeamInfo(this.team_id);
  }

  fetchTeamInfo(team_id) {
    axios.get(`${API_URL}/api/teams/${team_id}`)
      .then(res => {
        let battleTagIndex = res.data.positions.map((pos) => {
          return pos.battleTag
        });

        // debugger
        this.setState({
          team: res.data,
          battleTagIndex: battleTagIndex,
        });
      })
  }

  // fetchUserInfo(battleTagIndex) {
  //   battleTagIndex.forEach((battleTag, idx) => {
  //     console.log(battleTag);
  //   //   axios.post(`${API_URL}/api/testing/`, {
  //   //     battleTag: battleTag,
  //   //   }).then(res => {
  //   //     let userInfoIndex = this.state.userInfoIndex.slice();
  //   //     userInfoIndex[idx] = res.data;
  //   //     this.setState({
  //   //       userInfoIndex: userInfoIndex,
  //   //     })
  //   //   }, (error) => {
  //   //     console.log(error);
  //   //   })
  //   })
  // }

  render() {
    let { battleTagIndex } = this.state;
    return (
      <main className='team-main'>
        <div className='team-div'>
          <h1 className='team-name'>{this.state.team.team_name}</h1>
          <ul className='team-members'>
            {
              battleTagIndex.map((tag, idx) => <PlayerInfo
                battleTag={tag}
                team={this.state.team}
                key={`battleTag-${idx}`} pos={idx}/>)
            }
          </ul>
        </div>
      </main>
    )
  }
}

export default TeamMain;
