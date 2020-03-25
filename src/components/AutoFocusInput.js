import React from 'react'

class AutoFocusInput extends React.Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.input.focus();
        console.log(this.input)
    }

    handleChange() {
        console.log(this.input.value)
    }

    render() {
        return (
            <div>
                <h2>AutoFocusInput</h2>
                <input onChange={this.handleChange} ref={(input) => this.input = input} />
            </div>
        )
    }
}

export default AutoFocusInput;