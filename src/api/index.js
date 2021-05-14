import { post, get } from './request'

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

export const roleApi = {
  list: get('/getAllRoleList'),
  activeList: get('/getActiveRoleList'),
  getSiteList: get('/getSiteList'),
  getSiteDir: get('/getSiteDir'),
  getMenuPageList: get('/getMenuPageList'),
  delete: get('/deleteRole'),
  edit: post('/modifyRole'),
  item: get('/queryRole'),
  add: post('/addRole'),
  changeStatus: post('/modifyRoleStatus')
}
