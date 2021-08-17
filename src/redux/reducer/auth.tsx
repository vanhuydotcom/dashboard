import { LOGIN, LOGOUT, VERIFY } from '../type'
let initState = {
    login: JSON.parse(localStorage.getItem("login")!),
    message: "",
    logout: null,
    verify: null
}
export default function authReducer(state = initState, action: any) {
    switch (action.type) {
        case LOGIN:
            if (action.payload.data) {
                localStorage.setItem('token', action.payload.data.token)
            }
            return {
                ...state,
                login: action.payload.data,
                message: action.payload.message
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                logout: action.payload
            }
        case VERIFY:
            return {
                ...state,
                verify: action.payload
            }

        default:
            return state;
    }

}
