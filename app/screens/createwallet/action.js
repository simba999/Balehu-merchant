import {CREATE_WALLET_KEY} from './type';

export function createPrivateKey (data) {
  const tdata = data;
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_WALLET_KEY,
      data: data
    })
  }
}