import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home.jsx';
import TeamMain from './team_main';
import SplashPage from './splash';
import AboutUs from './about_us';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="nav">
            <a className="logo" href="/">OVER<span>M</span>ATCH</a>
            <a href="/api/logout"><button className="logout">Logout</button></a>
          </nav>
            <Switch>
              <Route path='/team' component={TeamMain} />
              <Route path='/login' render={() => <h1>Path login</h1>} />
              <Route exact path='/aboutus' component={AboutUs} />
              <Route path='/' component={SplashPage} />
            </Switch>
          <footer className="footer">
            <a className= "about-us" href="/aboutus">ABOUT US</a>
          </footer>
        </div>
      </BrowserRouter>
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
