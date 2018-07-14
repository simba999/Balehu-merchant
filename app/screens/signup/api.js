import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'

export const signUp =  (token,data) => {
  let url = `v1/app-auth/desktop-app-user-sign-up-part-1`;
  let result =  coreApi.POST(url,token,data);
  return result
}

export const appToken =  (token,data) => {
  let url = `v1/app-login`;
  let result =  coreApi.POST(url,token,data);
  return result
}
