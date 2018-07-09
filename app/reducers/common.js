import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

var initialstate = {
  data:0,
  tokenLoading:true,
  userToken:null,
  promotionFlag:false,
  userinfo:{},
  walletKey: ''
}

export const commonReducer = createReducer(initialstate, {
  [types.DEMO](state, action){
    return Object.assign({}, state, {
      data:action.data
    })
  },
  [types.TOKEN_LOADING](state, action){
    return Object.assign({}, state, {
      tokenLoading:action.data
    })
  },
  [types.SAVE_USER_TOKEN](state, action){
    let userinfo = {};
    if ('userinfo' in action) {
      userinfo = Object.assign({}, action.userinfo);
        return Object.assign({}, state, {
        userToken:action.data,
        userinfo:userinfo
      })
    } else {
      return Object.assign({}, state, {
        userToken:action.data
      })
    }    
  },
  [types.PROMOTION_FLAG](state, action){
    return Object.assign({}, state, {
      promotionFlag:action.data
    })
  },
  [types.CREATE_KEY](state, action){
    return Object.assign({}, state, {
      walletKey:action.data
    })
  }
})
