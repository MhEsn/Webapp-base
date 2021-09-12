import http from '../utils/http';

function add(model) {
    return http.request('POST', http.base.api, 'section/add', model);
}
function edit(model) {
    return http.request('POST', http.base.api, 'section/edit', model);
}
function get(id) {
    return http.request('GET', http.base.api, `section/get/${id}`);
}
function list() {
    return http.request('GET', http.base.api, `section/list`);
}
function remove(id) {
    return http.request('DELETE', http.base.api, `section/remove/${id}`);
}

export default {
    add: add,
    edit: edit,
    get: get,
    list: list,
    remove: remove
};
