import io from 'socket.io-client'
import { serverAddress } from './config'
import { socketGotCounter } from './action-creators'
import store from './store'

const socket = io(serverAddress)

socket.on('update', (counter) => {
  store.dispatch(socketGotCounter(counter))
})

export default socket
