import createReducer from '../lib/createReducer'
import * as types from '../lib/constants'

var initialstate = {
  data:0,
  tokenLoading:true,
  userToken:null,
  promotionFlag:false,
  userinfo:{},
  walletKey: '',
  promotion: {},
  business: {},
  promotions: {},
  market: []
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
        userToken:action.data,
      })
    }    
  },
  [types.PROMOTION_FLAG](state, action){
    return Object.assign({}, state, {
      promotionFlag:action.data
    })
  },
  [types.CREATE_WALLET_KEY](state, action){
    return Object.assign({}, state, {
      walletKey:action.data
    })
  },
  [types.CREATE_PROMOTION_ACTION](state, action){
    let promotions = [];
    
    if (state.promotions && state.promotions[action.userId]) {
      promotions = Object.assign([], state.promotions[action.userId])
    }
    
    promotions.push(action.data);

    const newPromotions = Object.assign({}, state.promotions);

    newPromotions[action.userId] = promotions;

    return Object.assign({}, state, {
      promotions:newPromotions
    })
  },
  [types.UPDATE_PROMOTION_ACTION](state, action){
    let promotions = [];
    
    if (state.promotions && state.promotions[action.userId]) {
      promotions = Object.assign([], state.promotions[action.userId])
    }
    
    promotions.map((promo) => {
      if (action.promotionID === promo.id) {
        const returnVal = Object.assign({}, promo, action.data);
        return returnVal;
      } else {
        return promo;
      }
    })

    return Object.assign({}, state, {
      promotions:promotions
    })
  },
  [types.SAVE_BUSINESS](state, action){
    let userinfo = Object.assign({}, state.userinfo)
    userinfo['user-id'] = action.data['user-id'];

    return Object.assign({}, state, {
      business:action.data,
      userinfo: userinfo
    })
  },
  [types.GET_MARKET](state, action){
    return Object.assign({}, state, {
      market:action.data
    })
  },

})
