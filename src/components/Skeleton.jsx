import React, { Component } from 'react';
import idleSkelton from '../game-resources/Skeleton/GIFS/Skeleton Idle.gif';

const skeletonStyles = {
  height: 30,
};

export default class Skeleton extends Component {
  calculatePositionStyle() {
    const { x, y, squareSize } = this.props;
    return {
      position: 'absolute',
      top: squareSize * y,
      left: squareSize * x,
    };
  }

  render() {
    return (
      <div style={this.calculatePositionStyle()}>
        <img alt="skeleton!" style={skeletonStyles} src={idleSkelton} />
      </div>
    );
  }
}
