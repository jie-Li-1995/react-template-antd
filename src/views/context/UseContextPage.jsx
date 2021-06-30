import React, { useContext } from 'react'
import { Context, UserContext } from './Context'

export default function UseContextPage() {
  const theme = useContext(Context)
  const user = useContext(UserContext)
  return (
    <div>
      <h1>color: {theme.color}</h1>
      <h1>name: {user.name}</h1>
    </div>
  )
}
