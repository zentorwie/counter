// import { serverAddress } from './config'
import socket from './socket'

export const GET_COUNTER_REQUEST = 'GET_COUNTER_REQUEST'
export const GET_COUNTER_SUCCESS = 'GET_COUNTER_SUCCESS'
export const GET_COUNTER_FAILURE = 'GET_COUNTER_FAILURE'
export const INC_COUNTER_REQUEST = 'INC_COUNTER_REQUEST'
export const INC_COUNTER_SUCCESS = 'INC_COUNTER_SUCCESS'
export const INC_COUNTER_FAILURE = 'INC_COUNTER_FAILURE'
export const SOCKET_GOT_COUNTER = 'SOCKET_GOT_COUNTER'
export const SOCKET_INC_COUNTER = 'SOCKET_INC_COUNTER'
export const SOCKET_GET_COUNTER = 'SOCKET_GET_COUNTER'

// const fetch = window.fetch

export function getCounter () {
  socket.emit('get')
  return {
    type: SOCKET_GET_COUNTER
  }
}

export function incCounter () {
  return {
    type: INC_COUNTER_REQUEST
  }
}

export function socketIncCounter () {
  socket.emit('increase')
  return {
    type: SOCKET_INC_COUNTER
  }
}

export function socketGotCounter (counter) {
  return {
    type: SOCKET_GOT_COUNTER,
    counter
  }
}
