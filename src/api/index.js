import {
  post,
  get
} from './request'

export const loginApi = {
  login: post('/login'),
  getLoginSiteList: get('/getLoginSiteList'),
  loginSite: get('/loginSite'),
  userManage: get('/userManage'),
  sendEmail: post('/sendEmailForModifyPassword'),
  modifyLoginPassword: post('/modifyLoginPassword'),
  changePwd: post('/modifyPassword'),
  uploadUserImage: post('/uploadUserImage'),
  changeBaseInfo: post('/modifyLoginInfo')
}