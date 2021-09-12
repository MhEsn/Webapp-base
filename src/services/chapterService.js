import http from '../utils/http';

function add(model) {
    return http.request('POST', http.base.api, 'chapter/add', model);
}
function edit(model) {
    return http.request('POST', http.base.api, 'chapter/edit', model);
}
function get(id) {
    return http.request('GET', http.base.api, `chapter/get/${id}`);
}
function list() {
    return http.request('GET', http.base.api, `chapter/list`);
}
function remove(id) {
    return http.request('DELETE', http.base.api, `chapter/remove/${id}`);
}

export default {
    add: add,
    edit: edit,
    get: get,
    list: list,
    remove: remove
};
