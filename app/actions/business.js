import { AsyncStorage } from "react-native"
import { 
	API_URL, 
	APP_LOGIN_URL, 
	REFRESH_URI,
	USERNAME,
	PASSWORD,
	AUTH,
	SIGNUP_BUSINESS_URL,
	Business,
	GET_MARKET_CATEGORY_URL,
	GET_BUSINESS_URL
} from './types'


export const createNewBusiness = (token, data) => {
	// let user = await AsyncStorage.getItem('balehu_user_token_detail');
	// user = JSON.parse(user);

	return fetch(API_URL+SIGNUP_BUSINESS_URL, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token
		}
	})
	.then(response => {
		console.log('Response: ', response)
		return response.json().then(async (res) => {
			console.log('RES: ', res)
			if (typeof(res.code) == "undefined") {
				// dispatch({ type: 'NEW_BUSINESS', payload: {data: data} });
			} else {
				await AsyncStorage.setItem('code', res.code)
				await AsyncStorage.setItem('message', res.message)
			}
			
			return res;
		});
	})
	.catch(err => {
		console.log('err: ', err)
		return { code: 500, message: err };
	})
}

export const getMarketCategory = (token, dispatch) => {
	// let user = await AsyncStorage.getItem('balehu_user_token_detail');
	// user = JSON.parse(user);
	// console.log(API_URL, GET_MARKET_CATEGORY_URL, user.token)
	return fetch(API_URL+GET_MARKET_CATEGORY_URL, {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token
		}
	})
	.then(response => {
		return response.json().then( async (res) => {
			console.log('market: ', res)
			if (typeof(res.code) == "undefined") {

				let categories = [];
				await res.categories.map((category) => {
					let tmp = {};

					tmp['value'] = category['category'];
					tmp['id'] = category['id'];

					categories.push(tmp);
				})
				return { code: 200, message: 'success',categories: categories }
			} else {
				return { code: res.code, message: res.message }
			}
		});
	})
	.catch(err => {
		console.log('err: ', err)
		return { code: 500, message: err };
	})
}

export const getBusiness = async(dispatch) => {
	const token = await AsyncStorage.getItem('token');

	return fetch(API_URL+GET_BUSINESS_URL, {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token
		}
	})
	.then(response => {
		return response.json().then((res) => {
			
			if (typeof(res.code) == "undefined") {
				// dispatch({ type: 'CHANGE_BUSINESS', payload: {data: res.businesses[0]} });
				return { code: 200, message: 'success', businesses: data.businesses }
			} else {
				return { code: res.code, message: res.message }
			}
		});
	})
	.catch(err => {
		console.log('err: ', err)
		return { code: 500, message: err };
	})
}

export const changeBusinessStatus = (data, dispatch) => {
	dispatch({ type: 'CHANGE_BUSINESS', payload: {data: data} });	
}
