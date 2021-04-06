import { combineReducers } from 'redux'

import counter from './modules/counter/reducers'
import loading from './modules/loading/reducers'
import userInfo from './modules/loading/reducers'

export default combineReducers({
  counter,
  userInfo,
  loading
})
