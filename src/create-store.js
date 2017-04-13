import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from './logger-middleware'
import promiseMiddleware from './promise-middleware'
import * as reducers from './reducers'

export default function (initialState) {
  const reducer = combineReducers(reducers)
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(promiseMiddleware, logger)
  )
  return store
}
