import { post, get } from './request'

export const loginApi = {
  getSystemName: get('SystemConfig/GetSystemName'),
  getVCode: get('Account/GetVCode'),
  login: post('account/login')
}
