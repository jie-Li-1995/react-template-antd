import axios from 'axios'
import store from '@/store'
import { changeLoading } from '@/store/modules/loading/actions'
import { HashRouter } from 'react-router-dom'
import { message } from 'antd'

const router = new HashRouter()
let request = 0

// 创建 axios 实例
const service = axios.create({
  baseURL: '/cms/admin', // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})

service.interceptors.request.use(
  config => {
    if (request === 0) store.dispatch(changeLoading(true))
    request++
    config.headers.token = window.sessionStorage.token || ''
    return config
  },
  err => {
    return Promise.reject(err)
  })

// res拦截器
service.interceptors.response.use(
  res => {
    const token = res.headers.token || ''
    const State = res.data.StatusCode
    if (token) window.sessionStorage.token = token
    if (State === 403) router.history.push({ pathname: '/login' })
    request--
    if (request === 0) {
      setTimeout(() => {
        store.dispatch(changeLoading(false))
        if (res.data.success !== true) {
          message.error(res.data.message || '')
        }
      }, 800)
    }
    return res
  },
  error => {
    request--
    if (request === 0) {
      setTimeout(() => {
        store.dispatch(changeLoading(false))
      }, 100)
    }
    router.history.push({ pathname: '/test', state: { day: 'Friday' } })
    return Promise.reject(error)
  }
)
export default service
