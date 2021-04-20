import React, { Component } from 'react'
import { Form, Input, Button, message, Checkbox } from 'antd'
import './index.less'
import { loginApi } from '@/api'

export default class Login extends Component {
  state = {
    checked: false,
    params: {
      name: '',
      pwd: ''
    }
  }

  onFormValueChange = (changeVal, allVal) => {
    this.setState({
      params: { ...allVal }
    })
  }

  changeState = (label) => {
    return (event) => {
      this.setState(
        () => ({
          [label]: event.target.value || event.target.checked
        }),
        () => {
          console.log(this.state)
        }
      )
    }
  }

  login = async () => {
    const res = await loginApi.login(this.state.params)
    if (res.data.success) {
      window.sessionStorage.userInfo.set(res.data.data)
      if (this.checked) {
        window.localStorage.loginName = this.params.name
      } else {
        window.localStorage.loginName = ''
      }
      if (res.data.data.passwordExpired) {
        message.warning('Your password has expired, please change it')
      }
      if (res.data.data.firstLogin) {
        message.warning('Please change your password when you log in for the first time')
      }
      if (res.data.data.firstLogin || res.data.data.passwordExpired) {
        this.props.history.push({ pathname: '/test' })
      } else {
        this.props.history.push({ pathname: '/test' })
      }
    }
  }

  render () {
    const { params } = this.state
    return (
      <div className="login">
        <section>
          <div className="login-form">
            <img src={require('../../assets/img/logo.jpg').default} alt="" />
            <h1 className="title">Welcome</h1>
            <Form
              initialValues={params}
              size="large"
              layout="vertical"
              onValuesChange={this.onFormValueChange}
            >
              <Form.Item label="Email" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Password" name="pwd">
                <Input />
              </Form.Item>
              <Button type="primary" onClick={this.login}>
                Log in
              </Button>
              <div className="remember">
                <Checkbox onChange={this.changeState('checked')}>
                  Remember me
                </Checkbox>
                <router-link to="/forgetPassword">
                  Forgot password？
                </router-link>
              </div>
            </Form>
          </div>
          <div className="login-swiper" />
        </section>
      </div>
    )
  }
}
