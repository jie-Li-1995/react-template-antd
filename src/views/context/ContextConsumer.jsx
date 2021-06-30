import React, { Component } from 'react'
import { Context, UserContext } from './Context'

export default class ContextConsumer extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {(Context) => (
            <>
              <h1>color: {Context.color}</h1>
              <UserContext.Consumer>{(UserContext) => <h1>name: {UserContext.name}</h1>}</UserContext.Consumer>
            </>
          )}
        </Context.Consumer>
      </div>
    )
  }
}
