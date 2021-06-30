import React, { Component } from 'react'
import { Context, UserContext } from './Context'

export default class ContextTypePage extends Component {
  static contextType = Context
  static contextType = UserContext

  render() {
    const { color, name } = this.context
    return (
      <div>
        <h1>color: {color}</h1>
        <h1>name: {name}</h1>
      </div>
    )
  }
}
