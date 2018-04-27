import React from 'react';

class PlayerInfo extends React.Component {
  render() {
    return (
      <div className='player-info'>
        <div className='player-info-slot smooth-border'>
          <img className='portrait smooth-border' alt='portrait' src="https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000001401.png"></img>
          <p className='name' scrolling="no">{"A_freakin_lo".toUpperCase()}</p>
          <div className='rank_div'>
            <img  className='rank_img'  alt='rank_img' src="https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-5.png"></img>
            <p className='rank'>2856</p>
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
