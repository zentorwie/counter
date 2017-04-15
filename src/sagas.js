// import { takeEvery } from 'redux-saga'
// import { call, put } from 'redux-saga/effects'
// import { INC_COUNTER_REQUEST, INC_COUNTER_SUCCESS, INC_COUNTER_FAILURE, GET_COUNTER_REQUEST, GET_COUNTER_SUCCESS, GET_COUNTER_FAILURE } from './action-creators'

// const fetch = window.fetch

// function httpGetCounter () {
//   return fetch('http://***REMOVED***/counter').then((res) => res.json())
// }

// function httpPostCounter () {
//   return fetch('http://***REMOVED***/counter', {
//     method: 'POST'
//   }).then((res) => res.json())
// }

// // worker
// export function * getCounterAsync (action) {
//   try {
//     const counter = yield call(httpGetCounter)
//     yield put({ type: GET_COUNTER_SUCCESS, result: { counter } })
//   } catch (e) {
//     yield put({ type: GET_COUNTER_FAILURE })
//   }
// }

// export function * incCounterAsync (action) {
//   try {
//     const counter = yield call(httpPostCounter)
//     yield put({ type: INC_COUNTER_SUCCESS, result: { counter } })
//   } catch (e) {
//     yield put({ type: INC_COUNTER_FAILURE })
//   }
// }

// // watcher
// export function * watchGetCounterAsync () {
//   yield * takeEvery(GET_COUNTER_REQUEST, getCounterAsync)
// }

// export function * watchIncCounterAsync () {
//   yield * takeEvery(INC_COUNTER_REQUEST, incCounterAsync)
// }
