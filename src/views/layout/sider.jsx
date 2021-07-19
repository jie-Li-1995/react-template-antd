import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu

class CCWSider extends React.PureComponent {
  state = {
    openKeys: ['check']
  }

  handleClick = (item) => {
    const pathname = `${this.props.match.path}/${item.keyPath.reverse().join('/')}`
    if (this.props.location.pathname !== pathname)
      this.props.history.push({ pathname, state: { day: 'Friday' } })
  }

  handleChange = (openKeys) => {
    this.setState({ openKeys: [openKeys[1]] })
  }

  render () {
    const PathArr = this.props.location.pathname.slice(1).split('/')
    let selectedKeys = [PathArr[1], PathArr[2]]
    const { openKeys } = this.state
    return (
      <div className='CCWSider'>
        <Menu
          onClick={this.handleClick}
          onOpenChange={this.handleChange}
          style={{ width: '100%', height: '100%' }}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          mode="inline"
        >
          <SubMenu key="check" icon={<AppstoreOutlined />} title="Check">
            <Menu.Item key="checkList">Check List</Menu.Item>
            <Menu.Item key="CreateCheck">Create Check</Menu.Item>
          </SubMenu>
          <SubMenu key="content" icon={<SettingOutlined />} title="Content Management">
            <Menu.Item key="contentList">Content List</Menu.Item>
            <Menu.Item key="createContent">Create Content</Menu.Item>
          </SubMenu>
          <SubMenu key="role" icon={<SettingOutlined />} title="role">
            <Menu.Item key="roleList">Role List</Menu.Item>
            <Menu.Item key="roleCreate">Role Create</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(CCWSider)
