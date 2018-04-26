import React from 'react';
import { HashRouter, Route, withRouter, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home.jsx';
import TeamMain from './team_main';
import { BrowserRouter } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <a>YUJEN OVERMATCH</a>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route path='/team' component={TeamMain} />
            <Route path='/login' render={() => <h1>Path login</h1>} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
        <footer className="footer">
          <a className= "about-us" href="#">ABOUT US</a>
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
