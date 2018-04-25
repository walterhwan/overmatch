import React from 'react';
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
              Player 1
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
