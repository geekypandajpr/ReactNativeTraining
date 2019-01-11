import functions from '../../common/functions';

export default class Api {
    static host = 'http://app.ylogapp.com:9393/YLogAPI/';
    // static host = 'http://app.ylogapp.com:9393/YLogAPIMobile/';

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
        .then((response) => {
            var statusCode = response.status;
            var data = statusCode === 204 ? [] : response.json();
            return Promise.all([statusCode, data]);
        })
        .then((responseJson) => {
            if(responseJson[0] === 200) {
                return responseJson[1];
            } else {
                if(responseJson[0] === 412) { 
                    functions.showToast(responseJson[1].results.msg, 'danger');
                    return null;
                } else if(responseJson[0] === 500) {
                    functions.showToast(responseJson[1].results, 'danger');
                    return null;
                } else if(responseJson[0] === 401) {
                    functions.showToast('Session time out', 'danger');
                    return null;
                } else if(responseJson[0] === 204) {
                    // functions.showToast('Data not found', 'warning');
                    return null;
                } else {
                    throw new Error(`{"message":"${status}"}`);
                }
            }
        }).catch(function(error) {
            console.log(error)
            throw new Error(error);
        })
    }
}