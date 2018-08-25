import React, { Component } from 'react';
import idleSkelton from '../resources/Skeleton/GIFS/Skeleton Idle.gif'

export default class Skeleton extends Component {
    render() {
        return <div>
            <img alt='skeleton!' style={{height: 32}} src={idleSkelton} />
        </div>;
    }
}
