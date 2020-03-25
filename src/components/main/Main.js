import React from 'react';
import Form from '../user/Form';

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: 'Hello ',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        if (event.target.value) {
            this.setState({
                value: event.target.value
            })
        }
    }


    render() {
        return (<Form myValue={this.state.value} updateStateProp={this.handleChange} />)
    }
}

export default Main;