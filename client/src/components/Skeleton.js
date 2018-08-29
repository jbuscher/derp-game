import React, { Component } from 'react';
import idleSkelton from '../resources/Skeleton/GIFS/Skeleton Idle.gif'

export default class Skeleton extends Component {
    render() {
        return <div style={this.calculatePositionStyle()}>
            <img alt='skeleton!' style={skeletonStyles} src={idleSkelton} />
        </div>;
    }

    calculatePositionStyle() {
        return {
            position: 'absolute',
            top: this.props.squareSize * this.props.y,
            left: this.props.squareSize * this.props.x,
        }
    }
}

var skeletonStyles = {
    height: 30
}