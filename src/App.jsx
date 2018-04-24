import React from 'react';
import TeamMain from './team_main';
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <a>OverMatch Logo</a>
          <a>About us</a>
        </nav>
        <HashRouter>
          <Switch>
            <Route path='/team' component={TeamMain} />
            <Route path='/login' render={() => <h1>Path login</h1>} />
            <Route path='/' render={() => <h1>Path /</h1>} />
          </Switch>
        </HashRouter>
        <footer className="footer">
          footer
        </footer>
      </div>
    );
  }
}

export default App;



  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <h1 className="App-title">Welcome to React</h1>
  // </header>
  // <p className="App-intro">
  //   To get started, edit <code>src/App.js</code> and save to reload.
  // </p>
