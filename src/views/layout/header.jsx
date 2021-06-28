import React from 'react'
import { withRouter } from 'react-router-dom'
import routes from '@/router'

class CCWHeader extends React.Component {
  route = {}

  findRoute = (data = routes) => {
    const route = data.find(item => this.props.location.pathname.includes(item.path)) || {
      meta: {
        icon: '',
        title: ''
      }
    }
    if ('children' in route) {
      this.findRoute(route.children)
    } else {
      this.route = { ...route }
    }
  }

  render () {
    this.findRoute()
    const route = this.route
    return (
      <div className="common-title">
        <div style={{ fontWight: '700' }}>
          <i className={route.meta.icon || ''} style={{ marginLeft: '15px' }} />
          {route.meta.title || ''}
        </div>
      </div>
    )
  }
}

export default withRouter(CCWHeader)
