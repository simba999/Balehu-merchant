import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'

export const createBusiness = (token,data) => {
  let url = `/v1/user-auth/desktop-app-user-sign-up-part-2`;
  let result = coreApi.POST(url,token,data);
  return result;
}

export const getMarketCategory = (token, data) => {
	let url =`/v1/app-auth/marketplace-business-categories`;
	let result = coreApi.POST(url, token, data);
	return result;
}