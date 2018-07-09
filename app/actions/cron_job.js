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

var timer = null;

export function startTimer(interval) {
	timer = setInterval(async () => {
		const token = await AsyncStorage.getItem('token');
		console.log(token);
		fetch(API_URL+REFRESH_URI, {
			method: 'GET',
			mode: 'cors', 
			headers: new Headers({
				'Content-Type': 'application/json',
				"Authorization": "Bearer " + token 	
			})
		})
		.then(response => {
			return response.json().then(async (res) => {
				console.log(res);
				if (res.code == 200) {
					await AsyncStorage.setItem('token', res.token)
				} else {
					await AsyncStorage.setItem('code',  res.code.toString())
					await AsyncStorage.setItem('message', res.message)
				}
				return res;
			});
		});
	}, interval)
}

export function endTimer() {
	clearInterval(timer);
}