import React from 'react';
import CInput from './CInput';
import CList from './CList';

class CMain extends React.Component {
    constructor(props) {
        super();
        this.state = {
            list: [{
                name: "li",
                text: "haiqlai",
            },
            {
                name: "li",
                text: "haiqlai",
            }
            ]
        }
        this.handleAddCommnet = this.handleAddCommnet.bind(this);
    }
    handleAddCommnet(item) {
        if (item) {
            let list = this.state.list;
            list.push(item);
            this.setState({
                list: list
            })
        }
    }

    render() {
        return (
            <div>
                <h2>CMain</h2>
                <CInput addCommnet={this.handleAddCommnet} />
                <CList list={this.state.list} />
            </div>
        )
    }
}

export default CMain;