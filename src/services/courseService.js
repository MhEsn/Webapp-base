import http from '../utils/http';

function add(model) {
    return http.request('POST', http.base.api, 'course/add', model);
}
function edit(model) {
    return http.request('POST', http.base.api, 'course/edit', model);
}
function get(id) {
    return http.request('GET', http.base.api, `course/get/${id}`);
}
function list() {
    return http.request('GET', http.base.api, `course/list`);
}
function remove(id) {
    return http.request('DELETE', http.base.api, `course/remove/${id}`);
}

export default {
    add: add,
    edit: edit,
    get: get,
    list: list,
    remove: remove
};
