import React from 'react'
import { render } from 'react-dom'
import createStore from './create-store'
import Application from './applications'
import { getCounter } from './action-creators'

const store = createStore({ counter: 0 })

store.dispatch(getCounter())

render(
  <Application store={store} />,
  document.getElementById('root')
)
