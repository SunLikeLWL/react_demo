import React from 'react';
import { NavLink } from 'react-router-dom'
class InBox extends React.Component {
    render() {
        return (
            <div>
                <h2>InBox</h2>
                <ul>
                    <li>
                        <NavLink to='/message/:12'>12</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default InBox;