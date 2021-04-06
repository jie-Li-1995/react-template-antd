import { AUTH_SUCCESS } from './action-types'

const userInfoInit = {
  Industry: '',
  Token: '',
  Display: '',
  Role: '',
  RolesSign: ''
}

export default function userInfo (state = userInfoInit, action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return { ...userInfoInit, ...action.data }
    default:
      return state
  }
}
