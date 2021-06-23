import React, { Component } from 'react'
import CCWHeader from './header'
import CCWSider from './sider'
import './index.less'
import { switchRoute } from '@/utils/renderRoute'


export default class CCWLayout extends Component {
  state = {
    messages: []
  }

  render () {
    return (
      <div className='layout'>
        <CCWSider />
        <div className='main-view'>
          <CCWHeader />
          <div className='main' style={{ overflow: 'auto', flex: 1 }}>
            {switchRoute(this.props.children, this.props.match.path)}
          </div>
        </div>
      </div>
    )
  }
}
