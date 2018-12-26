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

    static call(route, params, verb) {
        const url = `${Api.host}${route}`;
        let options = Object.assign({ method: verb }, { credentials: 'same-origin' }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();
        return fetch(url, options)
        .then((response) => response)
        .then((responseJson) => {
            if(responseJson.ok) {
                return responseJson.json();
            }
        }).catch(function(error) {
            alert(error.message);
            throw error;
        })
    }
}