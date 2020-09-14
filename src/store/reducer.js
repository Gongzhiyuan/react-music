
import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../components/recommend/store/reducer'

export default combineReducers({
  recommend: recommendReducer
})
