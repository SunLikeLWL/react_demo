import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterComp from './RouterComp';


ReactDOM.render(
  <RouterComp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



/*
React组件API：

 设置状态 setState
 替换状态 replaceState
 设置属性 setProps
 替换属性 replaceProps
 强制更新 forceUpdate
 获取DOM节点 findDOMNode
 判断组件挂件状态：isMounted
*/

/*
  组件的声明周期可分成三种状态：
  Mounting： 已插入真实DOM
  Updating： 正在被重新新渲染
  Unmounting： 已移除出真实DOM

*/


/*
componentWillMount  渲染前调用

componentDidMount  第一次渲染后调用

componentWillReceiveProps  组件接收到一个新的 prop (更新后)时被调用

shouldComponentUpdate  组件接收到新的props或者state时被调用。

componentWillUpdate 组件接收到新的props或者state但还没有render时被调用

componentDidUpdate 组件完成更新后立即调用

componentWillUnmount  组件从 DOM 中移除之前立刻被调用
*/