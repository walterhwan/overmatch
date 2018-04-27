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
      currentUserBattleTag: currentUserBattleTag,
      battleTagIndex: []
    }
  }
  render() {
    return (
      <main className='team-main'>
        <div className='team-div'>
          <h1 className='team-name'>Awesome Team</h1>
          <ul className='team-members'>
            <PlayerInfo battleTag={this.state.currentUserBattleTag}/>
            <li className='player' id='player-3'>Player 3</li>
            <li className='player' id='player-4'>Player 4</li>
            <li className='player' id='player-5'>Player 5</li>
            <li className='player' id='player-6'>Player 6</li>
          </ul>
        </div>
      </main>
    )
  }
}
// <li className='player' id='player-2'>Player 2</li>
// );

export default TeamMain;
