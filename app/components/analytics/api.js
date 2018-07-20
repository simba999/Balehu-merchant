import coreApi from '../../lib/coreApi'
import { ANALYTICS_URL } from '../../lib/constants'

export const getAnalyticsData = (token,data) => {
  let url = ANALYTICS_URL;
  console.log('ANALYTICS_URL', ANALYTICS_URL)
  let result = coreApi.POST(url,token,data);
  return result;
}