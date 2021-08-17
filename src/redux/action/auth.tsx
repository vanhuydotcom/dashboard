import auth from "../../service/auth"
import { Dispatch } from "react"
import { LOGIN, LOGOUT, VERIFY } from "../type"

export function verify() {
    return async (dispatch: Dispatch<any>) => {
        console.log("run")
        let res = await auth.verify()
        if (res) {
            dispatch({
                type: VERIFY,
                payload: res
            })
        }
    }
}

export function login(data: any) {
    return async (dispatch: any) => {
        let res = await auth.login(data)
        if (res) {
            dispatch({
                type: LOGIN,
                payload: res
            })
        }
    }
}
export function logout() {
    return async (dispatch: Dispatch<any>) => {
        console.log("run")
        let res = await auth.logout()
        if (res) {
            dispatch({
                type: LOGOUT,
                payload: res
            })
        }
    }
}
