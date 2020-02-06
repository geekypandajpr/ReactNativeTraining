export default class Api {
    static host = 'http://app.ylogapp.com:9393/YLogAPI/';

    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    static get(route) {
        return this.call(route, null, 'GET');
    }

    static post(route, params) {
        return this.call(route, params, 'POST');
    }

    static callPOST(route, params, verb) {
        const url = `${Api.host}${route}`
        return fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((response) => {
            if(response.ok) {
                return response.json()
            }
        }).catch(function(error) {
            alert(error.message);
            throw error;
        })
    }

    static call(route, params, verb) {
        const url = `${Api.host}${route}`
        let options = Object.assign({ method: verb }, { credentials: 'same-origin' }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers()
        return fetch(url, options)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        }).catch(function(error) {
            alert(error.message);
            throw error;
        })
    }

    static callGET(route, verb) {
        const url = `${Api.host}${route}`
        return fetch(url, {
            method: verb,
            credentials: 'include'
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        }).catch(function(error) {
            alert(error.message);
            throw error;
        })
    }
}