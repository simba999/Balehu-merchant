import { updatePromotionStatus } from './api';
import { UPDATE_PROMOTION_ACTION } from '../../lib/constants'

export function updatePromotionStatusAction (token, data) {
  console.log(token, data)
  return (dispatch, getState) => {
  	return updatePromotionStatus(token, data).then((res) => {
  		if (typeof(res.code) === "undefined") {
  			dispatch({
  				action: UPDATE_PROMOTION_ACTION,
  				data: data
  			})

  			return { code:200 }
  		} else {
  			return {code: res.code, message: res.message}
  		}
  	}).catch((err) => {
  		return { code: res.code, message: res.message }
  	})
  }
}