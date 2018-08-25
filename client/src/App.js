import React, { Component } from 'react';
import BuildMenu from './components/BuildMenu';
import FightArea from './components/FightArea';
import {subscribeToGameState} from './socket/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      gameState: {},
    };

    var cb = (err, serverGameState) => {
      this.setState({gameState: serverGameState});
    }
    subscribeToGameState(cb);
  }

  render() {
    return (
      <div className="App">
        <BuildMenu />
        <FightArea units={this.state.gameState.skeletonCount}/>
      </div>
    );
  }
}

export default App;
