import React from 'react';

class CList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let con = [];
        this.props.list.map((item) => {
            con.push(
                <div>
                    <p>name:{item.name}</p>
                    <p>name:{item.text}</p>
                </div>
            )
        })
        return (
            <div>
                {con}
            </div>

        )
    }
}

export default CList;