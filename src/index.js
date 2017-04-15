import React from 'react'
import { render } from 'react-dom'
import createStore from './create-store'
import Application from './applications'
import { serverAddress } from './config'
// import { getCounter } from './action-creators'
let store
let initCounter = 0

window.fetch(`${serverAddress}/counter`)
  .then(res => res.json())
  .then(res => {
    initCounter = res.counter
  })
  .catch(err => {
    console.error(err)
  })
  .then(() => {
    store = createStore({ counter: initCounter })
    render(
      <Application store={store} />,
      document.getElementById('root')
    )
  })
