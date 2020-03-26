import React from 'react';
import WrapWidthLoadData from './wrapWithLoadData';

class inputWidthUserName extends React.Component {
    render() {
        return <input value={this.props.data} />
    }
}


inputWidthUserName = WrapWidthLoadData(inputWidthUserName, 'username');

export default inputWidthUserName;
