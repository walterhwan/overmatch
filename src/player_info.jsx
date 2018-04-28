import React from 'react';
import PlayerStats from './player_stats';


class PlayerInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleTag: this.props.battleTag
    }
  }
  render() {
    return (
      <li className='player smooth-border' id='player-1'>
        <div className='hero-div'>
          <h1>Hero</h1>
          <div className='hero-select'>
            <select className="hero-dropdown">
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
            <img className="role-icon" src="../images/supportIcon.png"></img>
            <select className="role-dropdown">
              <option value='Tank'>Tank</option>
              <option value='Support'>Support</option>
              <option value='Offense'>Offense</option>
              <option value='Defense'>Defense</option>
            </select>
          </div>
        </div>
        <PlayerStats battleTag={this.state.battleTag || ""}/>
      </li>
    );
  }
}

export default PlayerInfo;
