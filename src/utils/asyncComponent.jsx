import React, { Suspense, Component } from 'react'
import { Spin } from 'antd'

const asyncComponent = LazyComponent => {
  return class extends Component {
    render () {
      return (
        <Suspense fallback={<Spin className='ccw-spin' />}>
          <LazyComponent />
        </Suspense>
      )
    }
  }
}

export default asyncComponent
