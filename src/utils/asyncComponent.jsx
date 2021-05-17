import React, { Suspense } from 'react'
import { Spin } from 'antd'

const asyncComponent = LazyComponent => {
  return (
    <Suspense fallback={<Spin className='ccw-spin' />}>
      <LazyComponent />
    </Suspense>
  )
}

export default asyncComponent
