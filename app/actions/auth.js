import { AsyncStorage } from "react-native"
import { 
	API_URL, 
	APP_LOGIN_URL, 
	USER_LOGIN_URL,
	REFRESH_URI,
	USERNAME,
	PASSWORD,
	AUTH,
	SIGNUP_USER_URL
} from './types';

export const app_login = () => {

	return fetch(APP_LOGIN_URL, {
		method: 'post',
		body: JSON.stringify({
			username: USERNAME,
			password: PASSWORD
		}),
		headers: {
			'Content-Type': 'application/json',
		}
	})
	.then(response => {
		return response.json().then(async (res) => {
			if (res.code == 200) {
				await AsyncStorage.setItem('token', res.token)
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

export const user_login = async (data, dispatch) => {
	const token = await AsyncStorage.getItem('token');

	return fetch(USER_LOGIN_URL, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token
		}
	})
	.then(response => {
		return response.json().then(async (res) => {
			console.log(res)
			if (res.code == 200) {
				await AsyncStorage.setItem('token', res.token)
			} else {
				await AsyncStorage.setItem('code', res.code.toString())
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

export const getRefreshToken = async (dispatch) => {
	const token = await AsyncStorage.getItem('token');

	return fetch(API_URL+REFRESH_URI, {
		method: 'GET',
		mode: 'cors', 
		headers: new Headers({
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token 	
		})
	})
	.then(response => {
		return response.json().then(async (res) => {
			if (res.code == 200) {
				await AsyncStorage.setItem('token', res.token)
			} else {
				await AsyncStorage.setItem('code',  res.code.toString())
				await AsyncStorage.setItem('message', res.message)
			}
			return res;
		});
	})
	.catch(err => {
		console.log('refres token err: ', err)
		return { code: 500, message: err };
	})
}

export const changeSignupStatus = async (data, dispatch) => {
	const token = await AsyncStorage.getItem('token');

	return fetch(API_URL+SIGNUP_USER_URL, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"Authorization": "Bearer " + token
		}
	})
	.then(response => {
		console.log('before signup', res, AUTH)
		return response.json().then(async (res) => {
			console.log('signup', res, AUTH)
			if (res.code == 200) {
				await AsyncStorage.setItem('token', res.token)
			} else {
				await AsyncStorage.setItem('code', res.code.toString())
				await AsyncStorage.setItem('message', res.message)
			}
			// dispatch({ type: AUTH['CHANGE_SIGNUP_STATUS'], payload: {data: data} });
			return res;
		});
	})
	.catch(err => {
		console.log('err: ', err)
		return { code: 500, message: err };
	})
	
}