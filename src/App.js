import React from 'react'


// 首先我们需要导入一些组件...
import { Router, Route, Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
