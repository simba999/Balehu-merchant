import { Constants } from './constants';
let domainUrl = Constants.BASE_URL;

export default {
  GET: (urlPath,token) => new Promise((resolve, reject) => {
    const url = domainUrl + urlPath
    console.log({url,token})
    fetch(url, {
      async: true,
      crossDomain: true,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        "Cache-Control": "no-cache"
      },
    }).then((response) => response.json())
    .then((responseText) => {
      resolve(responseText)
    })
    .catch((error) => {
      reject(error)
    });
  }),

  POST: (urlPath,token,data) => new Promise((resolve, reject) => {
    const url = domainUrl + urlPath
    console.log({url,token})
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((responseText) => {
      resolve(responseText);
    })
    .catch((error) => {
      reject(error);
    });
  })

  // GET_WITHOUT_AUTH: (urlPath,token,data) => new Promise((resolve, reject) => {
  //   const url = domainUrl + urlPath
  //   console.log('GET_WITH', {url,token})
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   }).then((response) => response.json())
  //   .then((responseText) => {
  //     resolve(responseText)
  //   })
  //   .catch((error) => {
  //     reject(error)
  //   });
  // }),

  // POST_WITHOUT_AUTH: (urlPath,token,data) => new Promise((resolve, reject) => {
  //   const url = domainUrl + urlPath
  //   console.log('POST_WITH', {url,token})
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((response) => response.json())
  //   .then((responseText) => {
  //     resolve(responseText);
  //   })
  //   .catch((error) => {
  //     reject(error);
  //   });
  // }),

  // POST_WITH_AUTH: (urlPath,token,data) => new Promise((resolve, reject) => {
  //   const url = domainUrl + urlPath
  //   console.log('POST_WITH', {url,token})
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((response) => {
  //     console.log('$$: ', response)
  //     response.json()
  //     .then((responseText) => {
  //       console.log('$$ response: ', responseText)
  //       resolve(responseText);
  //     });
  //   })
  //   .catch((error) => {
  //     reject(error);
  //   });
  // })
}
