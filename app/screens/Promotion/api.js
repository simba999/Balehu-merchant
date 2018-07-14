import coreApi from '../../lib/coreApi'
import { CREATE_PROMOTION } from '../../lib/constants'

export const createPromotion1 = (token,data) => {
  let url = CREATE_PROMOTION;
  let result = coreApi.POST(url,token,data);
  return result;
}