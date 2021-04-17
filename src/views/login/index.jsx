import React, { PureComponent } from 'react'
import { Form, Input, Button, message, Checkbox } from 'antd'
import './index.less'
import { loginApi } from '@/api'


export default class Login extends PureComponent {
  state = {
    name: '',
    pwd: ''
  }

  changeFormData = (label) => {
    return (event) => {
      this.setState(
        { [label]: event.target.value },
        () => {
          console.log(this.state)
        }
      )
    }
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
                <Checkbox v-model="checked">Remember me</Checkbox>
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
