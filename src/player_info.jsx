import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class PlayerInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }

    this.getUserInfoByBattleTag = this.getUserInfoByBattleTag.bind(this);
    this.getUserInfoByBattleTag(cookies.get('battleTag'));
  }

  getUserInfoByBattleTag(battleTag) {
    axios.defaults.port = 8080;
    axios.post('http://localhost:8080/api/testing/', {
      battleTag: battleTag
    })
      .then(res => {
        this.setState({
          userInfo: res.data
        })
      })
  }

  render() {
    let { userInfo } = this.state;
    let { rank_img, rank } = userInfo.competitive || {};
    console.log(userInfo);
    // let username = userInfo.username;
    return (
      <div className='player-info'>
        <div className='player-info-slot smooth-border'>
          <img className='portrait smooth-border' alt='portrait' src={userInfo.portrait}></img>
          <p className='name' scrolling="no">{userInfo.username}</p>
          <div className='rank_div'>
            <img  className='rank_img'  alt='rank_img' src={rank_img}></img>
            <p className='rank'>{rank}</p>
          </div>
        </div>
        <ul className='favorite-heros'>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default PlayerInfo;
