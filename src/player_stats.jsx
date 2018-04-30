import React from 'react';

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: this.props.userInfo,
    }

    this.copyBattleTag = this.copyBattleTag.bind(this);
    // this.getUserInfoByBattleTag(cookies.get('battleTag'));
    // if (this.props.battleTag) {
    //   this.getUserInfoByBattleTag(this.props.battleTag);
    // }
  }
  //
  // getUserInfoByBattleTag(battleTag) {
  //   axios.post(`${API_URL}/api/testing/`, {
  //     battleTag: battleTag,
  //   }).then(res => {
  //       this.setState({
  //         userInfo: res.data,
  //       })
  //     }, (error) => {
  //       console.log(error);
  //     })
  // }

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
    if (this.props.battleTag && this.props.userInfo) {
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
