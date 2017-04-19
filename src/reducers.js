import {
  INC_COUNTER_REQUEST,
  INC_COUNTER_SUCCESS,
  INC_COUNTER_FAILURE,
  GET_COUNTER_REQUEST,
  GET_COUNTER_SUCCESS,
  GET_COUNTER_FAILURE,
  SOCKET_GOT_COUNTER,
  SOCKET_INC_COUNTER
} from './action-creators'

export function counter (state = 0, action) {
  switch (action.type) {
    case INC_COUNTER_REQUEST:
      return state + 1
    case INC_COUNTER_SUCCESS:
      return action.result.counter
    case INC_COUNTER_FAILURE:
      return state
    case GET_COUNTER_REQUEST:
      return state
    case GET_COUNTER_SUCCESS:
      return action.result.counter
    case GET_COUNTER_FAILURE:
      return state
    case SOCKET_GOT_COUNTER:
      return action.counter
    case SOCKET_INC_COUNTER:
      return state + 1
    default:
      return state
  }
}
