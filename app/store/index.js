import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import reduxReset from 'redux-reset';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['mapReducer'],
  debug: true
}

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
const persistedReducer = persistReducer(persistConfig, reducers)

  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )

let store = createStore(persistedReducer,enhancer)
let persistor = persistStore(store)

export default {
  store,
  persistor
}
