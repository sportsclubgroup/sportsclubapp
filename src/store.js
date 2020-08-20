import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleWare),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || (compose)
  ));

export const persistor = persistStore(store);
  
export default { store, persistor };