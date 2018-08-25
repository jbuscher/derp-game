import React, { Component } from 'react';
import {buildSkeleton} from '../socket/api';

export default class Skeleton extends Component {
    render() {
        return <div>
            <button onClick={buildSkeleton}>buildSkeleton</button>
        </div>;
    }
}
