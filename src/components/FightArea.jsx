import React, { Component } from 'react';
import Skeleton from './Skeleton';

const playAreaStyles = {
  position: 'relative',
  height: 600,
  width: 1200,
  border: 'solid black 1px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const canvasStyle = {
  height: 600,
  width: 1200,
};

export default class FightArea extends Component {
  static renderPlayGrid() {
    return <canvas style={canvasStyle} />;
  }

  static renderUnits(units) {
    if (units) {
      return units.map(val => <Skeleton key={val.id} squareSize={30} x={val.x} y={val.y} />);
    }
    return null;
  }

  render() {
    const { units } = this.props;
    console.log(units);
    return (
      <div style={playAreaStyles}>
        {FightArea.renderPlayGrid()}
        {FightArea.renderUnits(units)}
      </div>
    );
  }
}
