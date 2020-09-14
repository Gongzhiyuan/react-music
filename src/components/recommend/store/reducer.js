import * as actionsTypes from './actions-type'


const defaultState = {
  banner: [],
  listView: [],
  locations: {
    scrollTop: 0,
    indexCurrpage: 0
  }
}

export const reducer = (state = defaultState, actions) => {
  const { type, payload } = actions
  switch (type) {
    case actionsTypes.SET_BANNER:
      return {
        ...state,
        banner: [...payload]
      }
    case actionsTypes.SET_LIST_VIEWS:
      return {
        ...state,
        listView: [...payload]
      }
    case actionsTypes.SET_LOCATION:
      console.log(payload)
      return {
        ...state,
        locations: { ...payload }
      }
    default:
      return state
  }
}
