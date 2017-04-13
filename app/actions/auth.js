import * as types from './types'
import Firestack from 'react-native-firestack'

const firestack = new Firestack()

export const userLogin = (user) => {
    firestack.auth.signInWithEmail(user.email, user.password)
    .then(resp => {
        console.log(resp)
        setUser(resp.user)
    }).catch((ex) => {
        console.log(ex)
    })
}

export const getUser = () => {
    firestack.auth.getCurrentUser()
    .then(user => console.log('The currently logged in user', user))
    .catch(err => console.error('An error occurred'))
}

export const setUser = (user) => {
    return {
        type: types.USER_LOGIN,
        user
    }
}