// const baseURL = 'http://v2.ylogapp.com/YLogAdminAPI';

export default class Api {
    static getBaseUrl() {
        return 'http://app.ylogapp.com:9393/YLogAPI/';
    }
    
    static get(url) {
        return this.getCall(url, 'GET');
    }

    static post(url, params) {
        return this.call(url, params, 'POST');
    }

    static async call(route, params, methodType) {
        const url = this.getBaseUrl() + route;
        let header = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        return fetch(url, {
            method: methodType,
            headers: header,
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((res) => {
            return res.results
        })
        .catch((error) => {
            return error;
        })
    }

    static async getCall(route, methodType) {
        const url = this.getBaseUrl() + route;
        let header = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        return await fetch(url, {
            method: methodType,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.status)
        .then((res) => {
            alert(res);
            return res;
        })
        .catch((error) => {
            alert(error);
            return error;
        })
    }

}