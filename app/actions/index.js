import * as types from './types'

export const userLogin = (user) => {
    console.log('Login for:', user.username)
    // implement login here
    return {
        type: types.USER_LOGIN,
        payload: user
    }
}