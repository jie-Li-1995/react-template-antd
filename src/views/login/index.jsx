import React, { PureComponent } from 'react'
import { Input, Button, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './index.less'
import { loginApi } from '@/api'

export default class Login extends PureComponent {
  state = {
    params: {
      Language: 'zh',
      Name: 'tjtest1',
      Password: '123456'
    },
    clickedLogin: false
  }

  // getSnapshotBeforeUpdate (prevProps: Readonly<TsProps>, prevState: Readonly<TsState>): any | null {
  // }

  handleLogin = async () => {
    if (!this.state.params.Name) {
      message.error('Please enter UserName')
    } else if (!this.state.params.Password) {
      message.error('Please enter password')
    } else {
      const res = await loginApi.login(this.state.params)
      if (res.data.Success) {
        window.sessionStorage.roles = res.data.Menus.join(',')
        window.sessionStorage.IsAdmin = res.data.IsAdmin
        window.sessionStorage.userName = res.data.Display
        this.props.history.push({ pathname: '/layout', state: { day: 'Friday' } })
      }
    }
  }

  handleChange = (val) => {
    const value = val.target.value
    const target = val.target.name
    this.setState(({ params }) => ({ params: { ...params, [target]: value } }))
  }

  render () {
    return (
      <div className="login clear-fix">
        <div className="wrap">
          <div className="showLogo">
            <img className="logo" src={require('@/assets/img/Logo.jpg')} alt="" />
            <div className="text">
              <p>Welcome to </p>
              <p>Siemens SFLL</p>
            </div>
          </div>
          <div className="loginBox">
            <p>LOGIN</p>
            <p>It’s so nice to see you！</p>
            <Input
              defaultValue={this.state.params.Name}
              size="large"
              className="item"
              name='Name'
              placeholder="UserName"
              onChange={this.handleChange}
              autoFocus
            />
            <Input
              defaultValue={this.state.params.Password}
              size="large"
              name='Password'
              className="item"
              onChange={this.handleChange}
              type="Password"
              placeholder="Password"
              onPressEnter={this.handleLogin}
            />
            {
              this.state.clickedLogin
                ? <Button size="large" icon={<LoadingOutlined />} disabled>Login</Button>
                : <Button size="large" type='primary' onClick={this.handleLogin}>Login</Button>
            }
          </div>
        </div>
      </div>
    )
  }
}
