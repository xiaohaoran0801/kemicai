import {createStore,applyMiddleware,combineReducers} from 'redux'
import {loadDataReducer} from './Reducers'
import mySaga from './saga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(loadDataReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store