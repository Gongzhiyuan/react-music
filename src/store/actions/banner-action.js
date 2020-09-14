

import { SET_BANNER } from './actions-type'
import { getRecommend } from '../../api/recommend'

export const bannerAction = () => async (dispatch) => {
  const banner = await getRecommend()
  dispatch({
    type: SET_BANNER,
    payload: banner.data.slider
  })
}