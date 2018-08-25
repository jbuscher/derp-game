import React, { Component } from 'react';
import {buildSkeleton, clear} from '../socket/api';

export default class Skeleton extends Component {
    render() {
        return <div>
            <button onClick={buildSkeleton}>buildSkeleton</button>
            <button onClick={clear}>Clear</button>
        </div>;
    }
}
