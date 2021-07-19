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
  arrayToTree = (items) => {
    const result = []   // 存放结果集
    const itemMap = {}  //
    for (const item of items) {
      if (!itemMap[item.name]) {
        itemMap[item.name] = { children: [] }
      }
      itemMap[item.name] = { ...item, children: itemMap[item.name]['children'] }
      const treeItem = itemMap[item.name]
      if (item.level === 1) {
        result.push(treeItem)
      } else {
        console.log('-------------------------')
        console.log(item)
        console.log(itemMap)
        console.log(itemMap[item.parent])
        itemMap[item.parent].children.push(treeItem)
      }
    }
    return result
  }

  initRoute = () => {
    const context = require.context('./views', true, /\.jsx/)
    const paths = context.keys()//获取了所有文件的路径
    const routes = paths.map(path => {
      const component = context(path).default
      // const meta = component['meta'] || {}
      const meta = {}
      path = path.substr(1).replace(/(\/index\.jsx|\.jsx)$/, '')
      const data = path.split('/')
      const name = data[data.length - 1]
      const level = path.split('/').length - 1
      const parent = data[level - 1]
      return { path, name, level, parent, component, meta }
    })
    console.log(routes.sort(function (a, b) {
      return a.level - b.level
    }))
    console.log(this.arrayToTree(routes))
  }

  componentDidMount () {
    this.initRoute()
  }

  render () {
    console.log('app render')
    return (
      <div className="App">
        {this.props.loading && <Spin className='ccw-spin' />}
        {renderRoutes(routes)}
      </div>
    )
  }
}

export default App
