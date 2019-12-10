import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers.js';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method
  storage: AsyncStorage,
  // Whitelist (Save Posts Reducer Data)
  whitelist: ['postsReducer'],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);
// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(thunk));
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {store, persistor};
