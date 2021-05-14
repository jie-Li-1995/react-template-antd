import React from 'react'
import { switchRoute } from '@/utils/renderRoute'


const Role = (props) => {
  return (
    <div className="role">
      {switchRoute(props.children, props.match.path)}
    </div>
  )
}

export default Role
