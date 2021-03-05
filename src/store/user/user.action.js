import * as constant from './user.constant'

export const setUserAction = user => ({
  type: constant.SET_USER,
  user
})

export const logOutAction = () => ({
  type: constant.LOG_OUT
})
