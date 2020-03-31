import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <h2>Message</h2>
        )
    }
}
export default Message;