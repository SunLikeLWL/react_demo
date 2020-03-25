import React from 'react';

class Ref extends React.Component {
    constructor(props) {
        super();
    }
    handleClick() {
        this.refs.myInput.focus();
    }
    handleSubmit() {
        console.log(this.refs)
    }

    render() {
        return (
            <div>
                <input type='text' ref='myInput' />
                <input
                    type='button'
                    value='输入框获取焦点'
                    onClick={this.handleClick.bind(this)}
                />
                <input
                    type='submit'
                    value='提交'
                    onClick={this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}


export default Ref;