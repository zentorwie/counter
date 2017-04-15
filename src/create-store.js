import { createStore, applyMiddleware, combineReducers } from 'redux'
// import logger from './logger-middleware'
import { createLogger } from 'redux-logger'
// import promiseMiddleware from './promise-middleware'
// import { createSagaMiddleware } from 'redux-saga'
// import { watchGetCounterAsync, watchIncCounterAsync } from './sagas'
import * as reducers from './reducers'

export default function (initialState) {
  const logger = createLogger()
  const reducer = combineReducers(reducers)
  const store = createStore(
    reducer,
    initialState,
    // applyMiddleware(promiseMiddleware, logger)
    applyMiddleware(
      // createSagaMiddleware(
        // watchGetCounterAsync,
        // watchIncCounterAsync
      // ),
      logger
    )
  )
  return store
}
