import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home.jsx';
import TeamMain from './team_main';
// import { AuthRoute, ProtectedRoute } from './util/route_util';
// import { ProtectedRoute } from './util/route_util';
import SplashPage from './splash';
import AboutUs from './about_us';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="nav">
            <div className="user-welcome" id="user-welcome"></div>
            <a className="logo" href="/">OVER<span>M</span>ATCH</a>
            <button className="logout"><a href="/api/logout">Logout</a></button>
          </nav>
            <Switch>
              <Route path='/team/:teamId' component={TeamMain} />
              <Route path='/home' component={Home} />
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
