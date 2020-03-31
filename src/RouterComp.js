import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'



import App from './App';
import About from './components/routetest/About';
import Inbox from './components/routetest/Inbox';
import Message from './components/routetest/Message';
import Dashboard from './components/routetest/Dashboard';


class RouterComp extends React.Component {
    render() {
        return (
            <Router>
                <IndexRoute component={Dashboard} />
                <Route path="/" component={App}>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox}>
                        <Route path="messages/:id" component={Message} />
                    </Route>
                </Route>
            </Router>
        )
    }
}

export default RouterComp;