import React from 'react'
import { Spin } from 'antd'
import { renderRoutes } from '@/utils/renderRoute'
import routes from '@/router'
import 'antd/dist/antd.less'
import { connect } from 'react-redux'
import './App.less'

@connect(
  state => ({ loading: state.loading })
)
class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.loading && <Spin className='ccw-spin' />}
        {renderRoutes(routes)}
      </div>
    )
  }
}

export default App
