import createReducer from '../../lib/createReducer'
import { ERROR_LOGIN } from './type';

var initialstate = {
  error:null
}

export const loginReducer = createReducer(initialstate, {
  [ERROR_LOGIN](state, action){
    return Object.assign({}, state, {
      error:action.data
    })
  },
})
