import React, { PureComponent } from 'react'
import { Form, Input, Button, message, Radio } from 'antd'
import './index.less'
import { loginApi } from '@/api'


export default class Login extends PureComponent {
  state = {
    formLayout: ''
  }

  onFormLayoutChange = ({ layout }) => {
    console.log(layout)
    this.setState({
      formLayout: layout
    })
  }

  render () {
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
                <Input v-model="params.name" />
              </Form.Item>
              <Form.Item label="Password">
                <Input v-model="params.pwd" type="password" />
              </Form.Item>
              <Button type="primary" onClick="login">Log in</Button>
              <div className="remember">
                <el-checkbox v-model="checked">Remember me</el-checkbox>
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
