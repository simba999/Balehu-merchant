import { ERROR_SIGNUP, SAVE_USER_TOKEN, SAVE_USER_INFO } from './type';
import { appToken, signUp } from './api'
import { Constants } from '../../lib/constants'
import { saveUserData, getUserData } from '../../lib/saveStore'
import { StackActions, NavigationActions } from 'react-navigation';

export function userSignUp (data) {
  const tdata = data;
  return (dispatch, getState) => {
    dispatch({
      type: ERROR_SIGNUP,
      data: null
    })
    return appToken(null,Constants.appDetail)
    .then((r,e)=>{
      if(e){
        dispatch({
          type: ERROR_SIGNUP,
          data: {message:'error in login'}
        })
      } else{
        if(r.code === 200) {
          let token = r.token; //balehu app token

          return new Promise((resolve, reject) => {
            signUp(token,tdata).then((r,e)=>{
              console.log('userSignUp action: ', r, token, tdata)
              if(r.code==200){
                let tokenData = {
                  token:r.token,
                  expire:r.expire,
                  balehuAppToken:token
                }
                
                saveUserData(tokenData, tdata).then((r,e)=>{
                  dispatch({
                    type: SAVE_USER_TOKEN,
                    data: tokenData,
                    userinfo: tdata
                  })

                  resolve({code: 200})
                  // const navigateAction = StackActions.reset({
                  //           index:0,
                  //           actions: [NavigationActions.navigate({ routeName: 'Business Information' })],
                  //         })
                  //   dispatch(navigateAction);
                })
              }else{
                alert(r.message)
                dispatch({
                  type: ERROR_SIGNUP,
                  data: {message:r.message}
                })

                resolve({code: 500, message: r.message})
              }
            })
          });

          

        } else {
          console.log('not signup part', r.message)
          dispatch({
            type:ERROR_SIGNUP,
            data:{message:r.message}
          })
          return new Promise((resolve, reject) => {
            resolve({code: 500, message: r.message})
          })
          // return {code: 500, message: r.message}
        }
      }
    })
  }
}
