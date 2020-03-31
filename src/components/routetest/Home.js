import React from 'react';
import { NavLink } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ul>
                    <li><NavLink name='About' to='/about'>About</NavLink></li>
                    <li><NavLink name='Inbox' to='/inbox'>Inbox</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Home;