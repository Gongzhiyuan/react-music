


import { SHOW_LIST_VIEW } from './actions-type'
import { listGet } from '../../api/lisi-view'

export const showListView = (params) => async (dispatch) => {
  const list = await listGet(params)
  dispatch({
    type: SHOW_LIST_VIEW,
    payload: list.data
  })
}