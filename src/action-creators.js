export const GET_COUNTER_REQUEST = 'GET_COUNTER_REQUEST'
export const GET_COUNTER_SUCCESS = 'GET_COUNTER_SUCCESS'
export const GET_COUNTER_FAILURE = 'GET_COUNTER_FAILURE'
export const INC_COUNTER_REQUEST = 'INC_COUNTER_REQUEST'
export const INC_COUNTER_SUCCESS = 'INC_COUNTER_SUCCESS'
export const INC_COUNTER_FAILURE = 'INC_COUNTER_FAILURE'

const fetch = window.fetch

export function getCounter () {
  return {
    types: [GET_COUNTER_REQUEST, GET_COUNTER_SUCCESS, GET_COUNTER_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {
        fetch('http://***REMOVED***/counter')
          .then((res) => res.json())
          .then((json) => resolve(json))
          .catch((err) => reject(err))
      })
    }
  }
}

export function incCounter () {
  return {
    types: [INC_COUNTER_REQUEST, INC_COUNTER_SUCCESS, INC_COUNTER_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {
        fetch('http://***REMOVED***/counter', {
          method: 'POST'
        })
          .then((res) => res.json())
          .then((json) => resolve(json))
          .catch((err) => reject(err))
      })
    }
  }
}
