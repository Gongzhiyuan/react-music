
import * as actionsTypes from './actions-type'
import { getRecommend, getDiscList } from '../../../api/recommend'

export const bannerAction = () => (dispatch) => {
  getRecommend().then(res => {
    dispatch({
      type: actionsTypes.SET_BANNER,
      payload: res.data.slider
    })
  }).catch(err => {
    console.log(err)
  })
}


export const listViewAction = () => (dispatch) => {
  getDiscList().then(res => {
    console.log(res)
    dispatch({
      type: actionsTypes.SET_LIST_VIEWS,
      payload: res.data.list
    })
  }).catch(err => {
    console.log(err)
  })
}


export const locationAction = (params) => {
  console.log(params)
  return {
    type: actionsTypes.SET_LOCATION,
    payload: params
  }
}