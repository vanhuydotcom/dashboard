import { AccordionSummaryProps } from '@material-ui/core';
import { apiDomain } from '../service/config'

class Api {
    accessToken: any;
    useToken = false
    token() {
        this.useToken = true;
        return this
    }
    json(res: any) {
        if (res.status === 200) {
            return res.json()
        }
        return new Promise((resolve, reject) => { })

    }


    _setUpHeaders() {

        let headers = {
            "Content-Type": "application/json",
            "Authorization": ' '
        }
        if (this.useToken) {
            let token = JSON.parse(localStorage.getItem('token') || '{}')
            // if (token?.accessToken) {
            //     headers.Authorization = `Bearer ${token.accessToken}`
            // }
        }
        this.useToken = false
        return headers
    }
    async request(url: any, option: any) {
        let response = await fetch(url, option)
        if (response.status === 200) {
            return response
        }
        // if (response.status === 403) {
        //     await this.refreshToken()
        //     let token = JSON.parse(localStorage.getItem('token') || '{}')
        //     if (token?.accessToken) {
        //         option.headers.Authorization = `Bearer ${token.accessToken}`
        //     }
        //     return fetch(url, option)
        // }
        return new Promise((resolve, reject) => { })
    }

    get(url: any) {
        let headers = this._setUpHeaders();
        return this.request(`${apiDomain}${url}`, { headers }).then(this.json);
    }
    post(url: any, data = {}) {
        let headers = this._setUpHeaders()
        let body = JSON.stringify(data)
        return this.request(`${apiDomain}${url}`, {
            method: 'POST',
            headers,
            body
        }).then(this.json)

    }
    put(url: any, data = {}) {
        let headers = this._setUpHeaders();
        let body = JSON.stringify(data)

        return this.request(`${apiDomain}${url}`, {
            method: 'PUT',
            headers,
            body
        }).then(this.json)
    }
    delete(url: any) {
        let headers = this._setUpHeaders()
        return this.request(`${apiDomain}${url}`, {
            method: 'DELETE',
            headers,

        }).then(this.json)
    }
}
export default new Api()