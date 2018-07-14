import { AsyncStorage } from 'react-native';


let saveUserData = (data) => new Promise((resolve, reject) => {
  console.log(['data save in async store',data])
  let newData = JSON.stringify(data);
  try {
    const value = AsyncStorage.setItem('balehu_user_token_detail',newData)
    resolve(value);
  } catch (e) {
    // Error retrieving data
    console.log({from:'error from saveUserData async store',e});
    reject(e)
  }
})


let getUserData = () => new Promise((resolve, reject) => {
  try {
      const value = AsyncStorage.getItem('balehu_user_token_detail');
      resolve(value)
    } catch (e) {
      // Error retrieving data
      console.log({from:'error from getUserData async store',e});
      reject(e)
    }
})

export {
  saveUserData,
  getUserData
}
