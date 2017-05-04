//import io from 'socket.io-client'
import store from '../store'
import axios from 'axios'
//const socket = io.connect('http://localhost:3001')

var api = axios.create({
	baseURL: 'http://10.68.0.58:3000'
})

export function getUsers() {
	api.get('/users').then(res=>{
		console.log('users', res.data)
		store.dispatch({
			type: 'GET_USERS',
			users: res.users
		})
	})
}

// export function addMessage(message) {
//     socket.emit('addMessage', message)
// }

// socket.on('newMessage', function(message){
//     store.dispatch({
//         type: 'ADD_MESSAGE',
//         message
//     })
// })