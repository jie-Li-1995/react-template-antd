import React, { PureComponent } from 'react'
import { Form, Input, Button, message, Checkbox } from 'antd'
import './index.less'
import { loginApi } from '@/api'


export default class Login extends PureComponent {
  state = {
    checked: false,
    params: {
      name: '',
      pwd: ''
    }
  }

  changeFormData = (label) => {
    return (event) => {
      this.setState(
        ({ params }) => ({
          params: {
            ...params,
            [label]: event.target.value
          }
        }),
        () => {
          console.log(this.state.params)
        }
      )
    }
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
    const res = await loginApi.login(this.state)
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
        this.$router.push({ name: 'firstLogin' })
      } else {
        this.$router.push({ name: 'siteSelect' })
      }
    }
  }

  // 
  getSnapshotBeforeUpdate() {
    console.log(1111)
    return 'liu_qihao'
  }
  componentDidUpdate(prevProps, prevStata, snapshot) {
    console.log(prevProps);
    console.log(prevStata);
    console.log(snapshot);
  }

  render() {
    return (
      <div className="login">
        <section>
          <div className="login-form">
            <img src={require('../../assets/img/logo.jpg')} alt="" />
            <h1 className="title">Welcome</h1>
            <Form
              size="large"
              layout="vertical"
              onValuesChange={this.onFormLayoutChange}
            >
              <Form.Item label="Email">
                <Input onChange={this.changeFormData('name')} />
              </Form.Item>
              <Form.Item label="Password">
                <Input onChange={this.changeFormData('pwd')} type="password" />
              </Form.Item>
              <Button type="primary" onClick="login">Log in</Button>
              <div className="remember">
                <Checkbox onChange={this.changeState('checked')}>Remember me</Checkbox>
                <router-link to="/forgetPassword">Forgot password？</router-link>
              </div>
            </Form>
          </div>
          <div className="login-swiper" />
        </section>
      </div>
    )
  }
}
