import React, { Component } from 'react'
import CCWFooter from './footer'
import CCWHeader from './header'
import CCWSider from './sider'
import './index.less'
import { switchRoute } from '@/utils/renderRoute'



export default class CCWLayout extends Component {
  state = {
    messages: []
  }
  // 这个生命周期函数是为了替代componentWillReceiveProps存在的
  static getDerivedStateFromProps (nextProps, prevState) {
    // const { type } = nextProps
    // // 当传入的type发生变化的时候，更新state
    // if (type !== prevState.type) {
    //   return { type }
    // }
    return null
  }


  render () {
    return (
      <div className='CCWLayout'>
        <CCWHeader />
        <div className='CCWContent'>
          <CCWSider />
          <div className='main' style={{overflow: 'auto', flex: 1}}>
            {switchRoute(this.props.children, this.props.match.path)}
          </div>
        </div>
        <CCWFooter />
      </div>
    )
  }
}
