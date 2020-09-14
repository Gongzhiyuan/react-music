import { combineReducers } from 'redux'
import { listReducer } from './list-view-reducer'
import { banner } from './banner-redecer'

export default combineReducers({
  listReducer: listReducer,
  banner: banner
})

