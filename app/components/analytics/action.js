import { getAnalyticsData } from './api'
import { GET_ANALYTICS_ACTION } from '../../lib/constants'


export function getAnalytics (token, userId, data) {
  return (dispatch, getState) => {
  	return new Promise((resolve, reject) => {
		getAnalyticsData(token, data).then((res) => {
			console.log('Get Analytics: ', res)
			if (typeof(res.code) === "undefined") {		
				dispatch({
					type: GET_ANALYTICS_ACTION,
					data: res,
					userId: userId
				})

				resolve({ code: 200, message: 'create success'})
			} else {
				resolve({ code: 500, message: res.message})
			}
		}).catch((err) => {
			resolve({ code: 500, message: err.message})
		})
  	})
  		
  }
}