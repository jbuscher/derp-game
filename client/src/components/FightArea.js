import React, { Component } from 'react';
import Skeleton from './Skeleton';

export default class FightArea extends Component  {
    render() {
        return <div>
            {this.renderUnits()}
        </div>;
    }

    renderUnits() {
        var skeletons = [];
        for (var i = 0; i < this.props.units; i++) {
          skeletons.push(<Skeleton key={i}/>);
        }
        return skeletons;
    }
}