import React from 'react';
import PlayerInfo from './player_info';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// import { HashRouter, Route, withRouter, Link, NavLink, Switch } from 'react-router-dom';

// const TeamMain = () => (
class TeamMain extends React.Component {
  constructor(props) {
    super(props);

    let currentUserBattleTag = cookies.get('battleTag');
    this.state = {
      battleTagIndex: [currentUserBattleTag, "", "", "", "", ""]
    }
  }
  render() {
    // console.log(this.state.battleTagIndex[0]);
    return (
      <main className='team-main'>
        <div className='team-div'>
          <h1 className='team-name'>Awesome Team</h1>
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
// <li className='player' id='player-2'>Player 2</li>
// );

export default TeamMain;
