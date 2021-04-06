import { CHANGE } from './action-types'

export default function loading (state = false, action) {
  switch (action.type) {
    case CHANGE :
      return action.data
    default:
      return state
  }
}
