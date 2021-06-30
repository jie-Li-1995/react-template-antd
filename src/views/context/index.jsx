import React, { Component } from 'react'
import { Context, UserContext } from './Context'
import ContextTypePage from './ContextTypePage'
import UseContextPage from './UseContextPage'
import ContextConsumer from './ContextConsumer'

export default class ContextWrap extends Component {
  state = {
    theme: {
      color: 'red',
    },
    user: {
      name: '小张',
    },
  }

  render() {
    const { theme, user } = this.state
    return (
      <div style={{ textAlign: 'center' }}>
        <Context.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ContextConsumer />
          </UserContext.Provider>
        </Context.Provider>
      </div>
    )
  }
}