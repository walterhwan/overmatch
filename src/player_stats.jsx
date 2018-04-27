import React from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }

    this.getUserInfoByBattleTag = this.getUserInfoByBattleTag.bind(this);
    // this.getUserInfoByBattleTag(cookies.get('battleTag'));
    if (this.props.battleTag) {
      this.getUserInfoByBattleTag(this.props.battleTag);
    }
  }

  getUserInfoByBattleTag(battleTag) {
    axios.defaults.port = 8080;
    axios.post('http://localhost:8080/api/testing/', {
      battleTag: battleTag
    }).then(res => {
      console.log(res);
        this.setState({
          userInfo: res.data
        })
      }, (error) => {
        console.log(error);
      })
  }

  render_rank(userInfo) {
    if(userInfo.competitive === undefined || userInfo.competitive.rank === null) {
      return (
        <div className='rank_div'></div>
      );
    } else {
      return (
        <div className='rank_div'>
          <img  className='rank_img'  alt='rank_img' src={userInfo.competitive.rank_img}></img>
          <p className='rank'>{userInfo.competitive.rank}</p>
        </div>
      );
    }
  }

  render() {
    let { userInfo } = this.state;
    if (this.props.battleTag) {
      return (
        <div className='player-stats'>
          <div className='player-stats-slot smooth-border'>
            <img className='portrait smooth-border' alt='portrait' src={userInfo.portrait}></img>
            <p className='name' scrolling="no">{userInfo.username}</p>
              {this.render_rank(this.state.userInfo)}
          </div>
          <ul className='favorite-heros'>
            <li></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className='player-stats empty'>
          <p className='name' scrolling="no">OPEN</p>
        </div>
      );
    }
  }
}

export default PlayerStats;
