
import { SET_BANNER } from '../actions/actions-type'

export const banner = (state = [], actions = {}) => {
  const { type, payload } = actions
  switch (type) {
    case SET_BANNER:
      return [...payload]
    default:
      return state
  }
}
