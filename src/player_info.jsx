import React from 'react';
import PlayerStats from './player_stats';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const API_URL = "https://overmatch-api.herokuapp.com";


const disableDropDownIfNotOwner = (team) => {
  let currentBattleTag = cookies.get('battleTag');
  // let team = this.state.team;
  if (team && team.positions && currentBattleTag !== team.positions[0].battleTag) {
    let els = document.querySelectorAll(".role-dropdown, .hero-dropdown")
    els.forEach((el) => el.disabled=true);
  }
}

class PlayerInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: this.props.team,
      userInfo: this.props.userInfo,
      battleTag: this.props.battleTag,
    }
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

    disableDropDownIfNotOwner(this.props.team);
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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    disableDropDownIfNotOwner(nextProps.team);
    return {
      team: nextProps.team,
      battleTag: nextProps.battleTag,
    }
  }

  render() {
    let heroList = ['Doomfist', 'Genji', 'McCree', 'Pharah', 'Reaper', 'Soldier 76', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjörn', 'Widowmaker', 'D.Va', 'Orisa', 'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Brigitte', 'Lúcio', 'Mercy', 'Moira', 'Symmetra', 'Zenyatta'];

    return (
      <li className='player' id='player-1'>
        <div className='filter'>
          <div className='role-div'>
            <h1>Role</h1>
            <div className='role-select'>
              <img className="role-icon" alt='icon' src="../images/supportIcon.png"></img>
              <select className="role-dropdown" onChange={this.handleRoleSelect}>
                <option default hidden>Select Role</option>
                <option value='Tank'>Tank</option>
                <option value='Support'>Support</option>
                <option value='Offense'>Offense</option>
                <option value='Defense'>Defense</option>
              </select>
            </div>
          </div>
          <div className='hero-div'>
            <h1>Hero</h1>
            <div className='hero-select'>
              <select
                className="hero-dropdown"
                onChange={this.handleHeroSelect}>
                <option default hidden>Select Hero</option>
                {heroList.map((hero, key) => {
                    return <option key={key} value={hero}>{hero}</option>;
                })}
              </select>
              <p className='drop-down-arrow'>></p>
            </div>
            <div className='hero-select'>
              <select
                className="hero-dropdown"
                onChange={this.handleHeroSelect}>
                <option default hidden>Select Hero</option>
                {heroList.map((hero, key) => {
                    return <option key={key} value={hero}>{hero}</option>;
                })}
              </select>
              <p className='drop-down-arrow'>></p>
            </div>
            <div className='hero-select'>
              <select
                className="hero-dropdown"
                onChange={this.handleHeroSelect}>
                <option default hidden>Select Hero</option>
                {heroList.map((hero, key) => {
                    return <option key={key} value={hero}>{hero}</option>;
                })}
              </select>
              <p className='drop-down-arrow'>></p>
            </div>
          </div>
        </div>
        <PlayerStats
          battleTag={this.state.battleTag || ""}
          userInfo={this.state.userInfo}/>
      </li>
    );
  }
}

// switchRoleLogo(select) {
//     const image = document.getElementsByName("logo-swap")[0];
//     image.src = select.options[select.selectedIndex].value;
//   }
//
//   render() {
//     return (
//       <li className='player smooth-border' id='player-1'>
//         <div className='hero-div'>
//           <h1>Hero</h1>
//           <div className='hero-select'>
//             <select className="hero-dropdown">
//               <option value='Doomfist'>Doomfist</option>
//               <option value='Genji'>Genji</option>
//               <option value='McCree'>McCree</option>
//               <option value='Pharah'>Pharah</option>
//               <option value='Reaper'>Reaper</option>
//             </select>
//           </div>
//         </div>
//         <div className='role-div'>
//           <h1>Role</h1>
//           <div className='role-select'>
//             <img className="role-icon" name="logo-swap" alt='icon' src=""></img>
//             <select className="role-dropdown" onChange={this.switchRoleLogo}>
//               <option value='../images/tankIcon.png'>Tank</option>
//               <option value='../images/supportIcon.png'>Support</option>
//               <option value='../images/offenseIcon.png'>Offense</option>
//               <option value='../images/defenseIcon.png'>Defense</option>
//             </select>
//           </div>
//         </div>
//         <PlayerStats battleTag={this.state.battleTag || ""}/>
//       </li>
//     );
//   }
// }

export default withRouter(PlayerInfo);
