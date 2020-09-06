
import { SHOW_LIST_VIEW } from '../actions/actions-type'

export const listReducer = (state = [], actions = {}) => {
  const { type, payload } = actions
  switch (type) {
    case SHOW_LIST_VIEW:
      return [...payload]
    default:
      return state
  }
}
