import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'

export const updatePromotionStatus = (token,data) => {
  let url = `v1/user-auth/user-promotion-update-active-state`;
  let result = coreApi.POST(url,token,data);
  return result;
}