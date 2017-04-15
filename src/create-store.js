import { createStore, applyMiddleware, combineReducers } from 'redux'
// import logger from './logger-middleware'
import { createLogger } from 'redux-logger'
// import promiseMiddleware from './promise-middleware'
import createSagaMiddleware from 'redux-saga'
import { watchGetCounterAsync, watchIncCounterAsync } from './sagas'
import * as reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function (initialState) {
  const logger = createLogger()
  const reducer = combineReducers(reducers)
  const store = createStore(
    reducer,
    initialState,
    // applyMiddleware(promiseMiddleware, logger)
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
  sagaMiddleware.run(watchGetCounterAsync)
  sagaMiddleware.run(watchIncCounterAsync)
  return store
}

