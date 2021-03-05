import * as constant from './user.constant'

const initialState = {
  isLoggedIn: false,
  user: {
    displayName: '',
    uid: '',
  }
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      }

    case constant.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }

    default:
      return state
  }
}
