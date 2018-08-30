import React, { Component } from 'react';
import BuildMenu from './BuildMenu';
import FightArea from './FightArea';
import { subscribeToGameState } from '../clientApi/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        skeletons: [],
      },
    };

    const cb = (err, serverGameState) => {
      this.setState({ gameState: serverGameState });
    };
    subscribeToGameState(cb);
  }

  render() {
    const { gameState } = this.state;
    console.log(gameState);
    return (
      <div>
        <BuildMenu />
        <FightArea units={gameState.skeletons} />
      </div>
    );
  }
}

export default App;
