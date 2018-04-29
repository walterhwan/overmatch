import React from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// const API_URL = "http://localhost:8080";
const API_URL = "https://overmatch-api.herokuapp.com";

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }

    this.getUserInfoByBattleTag = this.getUserInfoByBattleTag.bind(this);
    this.copyBattleTag = this.copyBattleTag.bind(this);
    // this.getUserInfoByBattleTag(cookies.get('battleTag'));
    if (this.props.battleTag) {
      this.getUserInfoByBattleTag(this.props.battleTag);
    }
  }

  getUserInfoByBattleTag(battleTag) {
    // axios.defaults.port = 8080;
    axios.post(`${API_URL}/api/testing/`, {
      battleTag: battleTag
    }).then(res => {
      // console.log(res);
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

  copyBattleTag() {
    let { userInfo } = this.state;

    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(document.getElementById('battleTag'));

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
    selection.removeAllRanges();
  }

  render() {
    let { userInfo } = this.state;
    if (this.props.battleTag) {
      return (
        <div className='player-stats tooltip' onClick={this.copyBattleTag}>
          <div className='player-stats-slot smooth-border'>
            <img className='portrait smooth-border' alt='portrait' src={userInfo.portrait}></img>
            <p
              className='battleTag'
              id='battleTag'
              scrolling="no">{this.props.battleTag}</p>
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
