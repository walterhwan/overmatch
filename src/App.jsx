import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home.jsx';
import TeamMain from './team_main';
import TeamIndex from './team_index';
// import { AuthRoute, ProtectedRoute } from './util/route_util';
// import { ProtectedRoute } from './util/route_util';
import SplashPage from './splash';
import AboutUs from './about_us';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends React.Component {
  logout() {
    cookies.remove('battleTag');
  }

  renderLogout() {
    let battleTag = cookies.get('battleTag');
    console.log('battleTag: ' + battleTag);
    if (battleTag) {
      return (
        <button className="logout" onClick={this.logout}><a href="/">Logout</a></button>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="nav">
            <div className="user-welcome" id="user-welcome"></div>
              <a className="logo" href="/">OVER<span>M</span>ATCH</a>
              <div className='nav-right'>
                <a className= "about-us" href="/aboutus">ABOUT US</a>
                {this.renderLogout()}
              </div>
          </nav>
            <Switch>
              <Route exact path='/teams' component={TeamIndex} />
              <Route path='/team/:teamId' component={TeamMain} />
              <Route path='/home' component={Home} />
              <Route exact path='/aboutus' component={AboutUs} />
              <Route path='/' component={SplashPage} />
            </Switch>
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
