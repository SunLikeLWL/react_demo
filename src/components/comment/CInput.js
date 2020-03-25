import React from 'react';

class CInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: {
                name: '',
                text: '',
            }
        }
        this.onNameBlur = this.onNameBlur.bind(this);
        this.onCMBlur = this.onCMBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onNameBlur(event) {
        let name = event.target.value;
        console.log(name)
        if (name) {
            let comment = this.state.comment;
            comment.name = name;
            this.setState({
                comment
            })
        }
    }
    onCMBlur(event) {
        let text = event.target.value;
        console.log(text)
        if (text) {
            let comment = this.state.comment;
            comment.text = text;
            this.setState({
                comment
            })
        }
    }
    onSubmit() {
        let comment = this.state.comment;
        if (comment && comment.name && comment.text) {
            this.props.addCommnet(comment)
        }
    }

    render() {
        return (
            <div className='cm-box'>
                <div className='name'>
                    <span>用户名：</span>
                    <input type='text' onBlur={this.onNameBlur} />
                </div>
                <div className='text'>
                    <span>评论内容：</span>
                    <textarea onBlur={this.onCMBlur}></textarea>
                </div>
                <div className='btn'>
                    <button onClick={this.onSubmit}>提交</button>
                </div>
            </div>
        )
    }
}

export default CInput;