import React from 'react';

export default (WrappedComnent, name) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super();
            this.state = {
                data: null
            }
        }
        componentWillMount() {
            let data = localStorage.getItem(name);
            this.setState({
                data
            })
        }
        render() {
            return (<WrappedComnent data={this.state.data} />)
        }
    }
    return NewComponent;
}