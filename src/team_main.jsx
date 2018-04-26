import React from 'react';
import PlayerInfo from './player_info';
// import { HashRouter, Route, withRouter, Link, NavLink, Switch } from 'react-router-dom';


// const TeamMain = () => (
class TeamMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className='team-main'>
        <div className='team-div'>
          <h1 className='team-name'>Awesome Team</h1>
          <ul className='team-members'>
            <li className='player' id='player-1'>
              <div className='role-div'>
                <h1>Role</h1>
                <select>
                  <option value='Tank'>Tank</option>
                  <option value='Support'>Support</option>
                  <option value='Offense'>Offense</option>
                  <option value='Defense'>Defense</option>
                </select>
              </div>
              <div className='hero-div'>
                <h1>Hero</h1>
                <select>
                  <option value='Doomfist'>Doomfist</option>
                  <option value='Genji'>Genji</option>
                  <option value='McCree'>McCree</option>
                  <option value='Pharah'>Pharah</option>
                  <option value='Reaper'>Reaper</option>
                </select>
              </div>
              <PlayerInfo />
            </li>
            <li className='player' id='player-2'>Player 2</li>
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
// );

export default TeamMain;
