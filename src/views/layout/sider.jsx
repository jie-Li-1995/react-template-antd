import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu

class CCWSider extends React.PureComponent {
  handleClick = (item) => {
    const pathname = `${this.props.match.path}/${item.keyPath.reverse().join('/')}`
    if (this.props.location.pathname !== pathname)
      this.props.history.push({ pathname, state: { day: 'Friday' } })
  }

  render () {
    let selectedKeys = []
    let openKeys = []
    const PathArr = this.props.location.pathname.slice(1).split('/')
    if (PathArr.length === 3) {
      selectedKeys = [PathArr[1], PathArr[2]]
      openKeys = [PathArr[1]]
    }
    return (
      <div className='CCWSider'>
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%', height: '100%' }}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          mode="inline"
        >
          <SubMenu key="check" icon={<AppstoreOutlined />} title="Check">
            <Menu.Item key="checkList">Check List</Menu.Item>
            <Menu.Item key="CreateCheck">Create Check</Menu.Item>
          </SubMenu>
          <SubMenu
            key="content"
            title={
              <p>
                <SettingOutlined />
                <span>Content Management</span>
              </p>
            }
          >
            <Menu.Item key="contentList">Content List</Menu.Item>
            <Menu.Item key="createContent">Create Content</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(CCWSider)
