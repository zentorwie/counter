import React from 'react'
import { render } from 'react-dom'
import Application from './applications'
// import { serverAddress } from './config'
// import { getCounter } from './action-creators'
import store from './store'

render(
  <Application store={store} />,
  document.getElementById('root')
)
