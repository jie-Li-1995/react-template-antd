import React from 'react'
import { switchRoute } from '@/utils/renderRoute'


const Check = (props) => {
  return (
    <div>
      {switchRoute(props.children, props.match.path)}
    </div>
  )
}

export default Check
