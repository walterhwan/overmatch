import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <a>OverMatch Logo</a>
          <a>About us</a>
        </nav>
        <main className="main">
          <h1>Main</h1>
          <p>This is an app that help players in overwatch to create their perfect team.</p>
        </main>
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
