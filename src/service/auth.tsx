// import { apiDomain } from "./config"

// import Api from "../core/Api";
import { apiDomain } from "./config";
const auth = {
    login(data: any) {
        return fetch(`${apiDomain}/console/admin/signin`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => res.json())
    },
    async logout() {
        let token = localStorage.getItem('token');
        if (!token) return;
        console.log(token);
        const response = await fetch(`${apiDomain}/console/admin/signout`, {
            method: 'POST',
            cache: "no-store",
            headers: new Headers({
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw Error(errorData.message);
        }

        const payload = await response.json();

        return payload;
    },
    verify() {
        let token = localStorage.getItem('token')
        if (!token) return;
        return fetch(`${apiDomain}/console/admin/verify`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    },
}
export default auth
