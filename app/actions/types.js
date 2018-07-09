export const API_URL = 'https://api.balehu.com';
export const APP_LOGIN_URL = API_URL + '/v1/app-login';
export const USER_LOGIN_URL = API_URL + '/v1/app-auth/user-login';
export const REFRESH_URI = '/v1/app-auth/refresh-app-token';
export const SIGNUP_USER_URL = '/v1/app-auth/desktop-app-user-sign-up-part-1';
export const SIGNUP_BUSINESS_URL = '/v1/user-auth/desktop-app-user-sign-up-part-2';
export const GET_MARKET_CATEGORY_URL = '/v1/app-auth/marketplace-business-categories';
export const GET_BUSINESS_URL = '/v1/user-auth/desktop-get-user-businesses';

export const USERNAME = 'balehu-web';
export const PASSWORD = 'W6MinFcWLalbzgXNKVAlIaiIpexwZAgExzPAAZAghVTi94JkvHn5CHRN0oey1gfZ';

// set interval as 30 minutes for refreshing toknes
export const refresh_token_interval = 30 * 60000;


/* ACTION TYPES */
export const DEMO = 'DEMO';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
export const TOKEN_LOADING = 'TOKEN_LOADING';
export const PROMOTION_FLAG = 'PROMOTION_FLAG';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const CREATE_WALLET_KEY = 'CREATE_WALLET_KEY';