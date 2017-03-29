import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';


import { AuthReducer } from './reducer/auth';
import { BloodReducer } from './reducer/auth';

import { AuthEpic } from './epic/auth';
import { BloodEpic } from './epic/blood';



//combine epic
const rootEpic = combineEpics(
    BloodEpic.submitRequest,
    BloodEpic.requestUser,
    BloodEpic.allUser,
    AuthEpic.signup,
    AuthEpic.login,
    AuthEpic.isLogin,
    AuthEpic.logout,
);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer,
    BloodReducer
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)