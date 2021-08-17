import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"
import { RootState } from "../redux"

export default function PrivateRoute(prop: any) {
    // let auth = useSelector((state:RootState) => state.auth)
    // if (auth.message) {
    //     setTimeout(() => {
    //         document.querySelector('.popup-login').style.display = 'flex'
    //     }, 0)
    //     return <Redirect path="/" />
    // }
    return <Route {...prop} />
}