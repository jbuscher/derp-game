import React, { Component } from 'react';
import Skeleton from './Skeleton';

export default class FightArea extends Component  {
    render() {
        return (
            <div style={playAreaStyles} >
                {this.renderUnits()}
            </div>
        );
    }

    renderPlayGrid() {

    }

    renderUnits() {
        var skeletons = [];
        for (var i = 0; i < this.props.units; i++) {
          skeletons.push(<Skeleton key={i}/>);
        }
        return skeletons;
    }
}

var playAreaStyles = {
    height: 600,
    width: 1200,
    border: 'solid black 1px',
    marginLeft: 'auto',
    marginRight: 'auto',
};
