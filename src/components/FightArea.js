import React, { Component } from 'react';
import Skeleton from './Skeleton';
import { relative } from 'path';

export default class FightArea extends Component  {
    render() {
        return (
            <div style={playAreaStyles} >
                {this.renderPlayGrid()}
                {this.renderUnits()}
            </div>
        );
    }

    renderPlayGrid() {
        return <canvas style={canvasStyle}></canvas>
    }

    renderUnits() {
        var skeletons = [];
        for (var i = 0; i < this.props.units; i++) {
          skeletons.push(<Skeleton key={i} squareSize={30} x={i} y={i}/>);
        }
        return skeletons;
    }
}

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
}
