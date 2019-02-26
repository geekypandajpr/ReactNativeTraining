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

    static put(route, params) {
        return this.call(route, params, 'PUT');
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
                if (responseJson[0] === 200) {
                    return responseJson[1];
                } else if (responseJson[0] === 412) {
                    if (responseJson[1].results.msg)
                        functions.showToast(responseJson[1].results.msg, 'danger');
                    else
                        functions.showToast("Precondition Failed", 'danger');
                    return null;
                } else if (responseJson[0] === 500) {
                    functions.showToast("Internal Server Error", 'danger');
                    return null;
                } else if (responseJson[0] === 401) {
                    functions.showToast('Session Expired, Please login again!', 'danger');
                    return null;
                } else if (responseJson[0] === 204) {
                    return [];
                } else {
                    throw new Error(`{"message":"${status}"}`);
                }

            }).catch(function (error) {
                console.log("Error->" + error);
                throw new Error(error);
            })
    }
}