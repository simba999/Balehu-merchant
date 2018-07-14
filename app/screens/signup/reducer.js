import createReducer from '../../lib/createReducer'
import { ERROR_SIGNUP, SAVE_USER_INFO } from './type'

var initialstate = {
  error:''
}

export const signUpReducer = createReducer(initialstate, {
  [ERROR_SIGNUP](state, action){
    return Object.assign({}, state, {
      error:action.data
    })
  },
  [SAVE_USER_INFO](state, action){
    return Object.assign({}, state, {
      userinfo:action.data
    })
  },
})
