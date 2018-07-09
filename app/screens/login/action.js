import { ERROR_LOGIN, SAVE_USER_TOKEN } from './type';
import { appToken, signIn } from './api'
import { Constants } from '../../lib/constants'
import { saveUserData, getUserData } from '../../lib/saveStore'
import { StackActions, NavigationActions } from 'react-navigation';


export function login (data) {
  const tdata = data
  return (dispatch, getState) => {
    dispatch({
      type: ERROR_LOGIN,
      data: null
    })
    return appToken(null,Constants.appDetail)
    .then((r,e)=>{
      if(e){
        alert('error in login')
        dispatch({
          type: ERROR_LOGIN,
          data: {message:'error in login'}
        })
      }else{
        if(r.code == 200){
          let token = r.token;

          signIn(token, data).then((r,e)=>{
            if(r.code==200){
              let tokenData = {
                token:r.token,
                expire:r.expire,
                balehuAppToken:token
              }
              saveUserData(tokenData).then((r,e)=>{
                dispatch({
                  type: SAVE_USER_TOKEN,
                  data: tokenData
                })
                return {'code': 200}
                // const navigateAction = StackActions.reset({
                //           index:0,
                //           actions: [NavigationActions.navigate({ routeName: 'Main' })],
                //         })
                //   dispatch(navigateAction);
              })
            }else{
              alert(r.message)
              dispatch({
                type: ERROR_LOGIN,
                data: {message:r.message}
              })
              return {'code': 500, message: r.message}
            }
          })
        }
      }
    })
  }
}
