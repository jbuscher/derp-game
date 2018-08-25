import React, { Component } from 'react';
import BuildMenu from './components/BuildMenu';
import Skeleton from './components/Skeleton';
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
        {this.renderSkeletons()}
      </div>
    );
  }

  renderSkeletons() {
    var skeletons = [];
    for (var i = 0; i < this.state.gameState.skeletonCount; i++) {
      skeletons.push(<Skeleton key={i}/>);
    }
    return skeletons;
  }
}

export default App;
