import React, { Component } from 'react';
import AppRouter from './AppRouter';
/*
1. Active link in navigation is not highlighted. check following screenshot https://imgur.com/rSzgR01
2. Move all logic from AppRouter into this component because current App.js has no logic
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
