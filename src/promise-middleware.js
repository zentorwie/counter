export default function promiseMiddleware () {
  return next => action => {
    const { promise, types } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types

    next(Object.assign({}, action, { type: REQUEST }))

    return promise()
      .then((result) => {
        next(Object.assign({}, action, { type: SUCCESS }))
      })
      .catch((error) => {
        next(Object.assign({}, action, { type: FAILURE }))
      })
  }
}
