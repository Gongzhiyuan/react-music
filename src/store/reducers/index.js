import { combineReducers } from 'redux'
import { listReducer } from './list-view-reducer'


const reducerList = {
  listReducer: listReducer
}

const rootReducer = combineReducers(reducerList)

export default rootReducer

