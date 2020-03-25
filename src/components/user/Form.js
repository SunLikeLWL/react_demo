import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super();
        console.log(props)
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.myValue} onChange={this.props.updateStateProp} />
                <h4>{this.props.myValue}</h4>
            </div>
        )
    }
}

export default Form;