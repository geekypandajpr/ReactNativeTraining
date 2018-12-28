import functions from '../../common/functions';

export default class Api {
    // static host = 'http://app.ylogapp.com:9393/YLogAPI/';
    static host = 'http://app.ylogapp.com:9393/YLogAPIMobile/';

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
            } else {
                const status = responseJson.status;
                if(status === 412) {
                    const res = responseJson.json();
                    if(res) {
                        if(res.results) {
                            functions.showToast(res.results.msg, 'danger');
                        }
                    }
                } else if(status === 500) {
                    functions.showToast('Internal server error', 'danger');
                } else if(status === 401) {
                    functions.showToast('Session time out', 'danger');
                }
                return null;
            }
        }).catch(function(error) {
            alert(error.message);
            throw error;
        })
    }
}