import { updatePromotionStatus } from './api';
import { UPDATE_PROMOTION_ACTION } from '../../lib/constants'

export function updatePromotionStatusAction (token, data, userId) {
  return (dispatch, getState) => {
    console.log(token, data)
  	return updatePromotionStatus(token, data).then((res) => {
      console.log(token, data)
  		if (typeof(res.code) === "undefined") {
  			dispatch({
  				type: UPDATE_PROMOTION_ACTION,
  				data: data,
          userId: userId
  			})

  			return { code:200 }
  		} else {
  			return {code: res.code, message: res.message}
  		}
  	}).catch((err) => {
  		return { code: err.code, message: err.message }
  	})
  }
}