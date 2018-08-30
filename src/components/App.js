import React, { Component } from 'react';
import BuildMenu from './BuildMenu';
import FightArea from './FightArea';
import {subscribeToGameState} from '../clientApi/api';

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
      <div>
        <BuildMenu />
        <FightArea units={this.state.gameState.skeltonCount}/>
      </div>
    );
  }
}

export default App;
