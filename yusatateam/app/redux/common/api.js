// const baseURL = 'http://v2.ylogapp.com/YLogAdminAPI';

export default class Api {
    static getBaseUrl() {
        return 'http://app.ylogapp.com:9393/YLogAPI/';
    }
    
    static get(url) {
        return this.call(url, null, 'GET');
    }

    static post(url, params) {
        return this.call(url, params, 'POST');
    }

    static async call(route, params, methodType) {
        const url = this.getBaseUrl() + route;
        let header = {
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
            console.log('Error in getting list');
            return error;
        })
    }

}