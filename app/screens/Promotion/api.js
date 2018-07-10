import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'

export const createPromotion = (token,data) => {
  let url = Constants.CREATE_PROMOTION;
  let result = coreApi.POST(url,token,data);
  return result;
}