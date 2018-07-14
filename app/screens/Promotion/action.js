import { createPromotion1 } from './api'
import { CREATE_PROMOTION_ACTION } from '../../lib/constants'


export function createPromotion (token, data) {
  return (dispatch, getState) => {
  	return new Promise((resolve, reject) => {
		createPromotion1(token, data).then((res) => {
			console.log('create protmotion: ', res)
			if (typeof(res.code) === "undefined") {
				dispatch({
					type: CREATE_PROMOTION_ACTION,
					data: data
				})

				resolve({ code: 200, message: 'create success'})
			} else {
				resolve({ code: 500, message: 'internal server error'})
			}
			
		})
  	})
  		
  }
}