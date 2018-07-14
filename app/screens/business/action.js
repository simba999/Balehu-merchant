import { ERROR_CREATE_BUSINESS, SAVE_BUSINESS, GET_MARKET } from './type';
import { createBusiness, getMarketCategory } from './api'
import { Constants, CREATE_PROMOTION_ACTION } from '../../lib/constants'
import { StackActions, NavigationActions } from 'react-navigation';

// export function 
export function createNewBusiness (token, data) {
  return (dispatch, getState) => {
  	return new Promise((resolve, reject) => {
		createBusiness(token, data).then((res) => {
			console.log('create busienss: ', res)
			if (typeof(res.code) === "undefined") {
				const t_data = {...data, "user-id": res["user-id"], "business-id": res["business-id"]}
				
				dispatch({
					type: SAVE_BUSINESS,
					data: t_data
				})

				// resolve({ code: 200, message: 'create success'})
			} else {
				console.log(res)
				// resolve({ code: 500, message: 'internal server error'})
			}
			resolve(res)
		}).catch(err => {
			console.log('err: ', err)
			resolve({ code: 500, message: err });
		})
  	})
  		
  }
}

export function getMarketCategories (token) {
	console.log(token)
	console.log('aaa')
    return (dispatch, getState) => {
  	// return new Promise((resolve, reject) => {
		getMarketCategory(token).then(async (res) => {
			console.log('create market cateogry: ', res)
			if (typeof(res.code) === "undefined") {
				let categories = [];
				await res.categories.map((category) => {
					let tmp = {};

					tmp['value'] = category['category'];
					tmp['id'] = category['id'];

					categories.push(tmp);
				})

				dispatch({
					type: GET_MARKET,
					data: categories
				})

			}

			// resolve(res)
			
		})
  	// })
  		
  }
}