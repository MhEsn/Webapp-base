import http from '../utils/http';

function signup(model) {
    return http.request('POST', http.base.api, 'users/signup', model);
}
function login(model) {
    return http.request('POST', http.base.api, 'users/login', model);
}
function logout(model) {
    return http.request('POST', http.base.api, 'users/logout', model);
}
function logoutAll(model) {
    return http.request('POST', http.base.api, 'users/logoutAll', model);
}
function get(id) {
    return http.request('GET', http.base.api, `users/${id}`);
}
function me() {
    return http.request('GET', http.base.api, `users/me`);
}
function remove() {
    return http.request('DELETE', http.base.api, `users/delete`);
}

export default {
    signup: signup,
    login: login,
    logout: logout,
    logoutAll: logoutAll,
    get: get,
    remove: remove,
    me: me
};
