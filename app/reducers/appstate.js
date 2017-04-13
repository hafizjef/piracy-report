import * as types from '../actions/types'

const appState = (state = {isLoggedIn: false}, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                isLoggedIn: true,
                user: action
            }
    }
    return state
}

export default appState