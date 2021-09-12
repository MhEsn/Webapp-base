import env from './env';
const fetch = require('node-fetch');

export default {
	base: {
		api: `${env.server.api.url}`
	},
	request: httpRequest,
};

function httpRequest(method, base, url, params) {
	let headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	};
	const token = JSON.parse(localStorage.getItem('token'));
	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}
	return fetch(`${base}/${url}`, {
		method: method,
		headers: headers,
		body: JSON.stringify(params)
	})
		.then((response) => {
			debugger
			if (response.status === 201 || response.status === 200) {
				return response.json();
			}
			if(response.status === 204){
				return response.text();
			}
			else if (response.status === 401) {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				window.location.href = `${window.location.origin}/login`;
				alert('اعتبار ورود شما به پایان رسیده است، مجددا وارد شوید');
			}
			else {
				return Promise.reject(response.status)
			}
		})
		.catch((error) => {
			if (error) {
				error.message = error.message ? error.message.split('&&').join('\n') : '';
			}

			return Promise.reject(error.message);
		});
}
function serialize(params) {
	return Object.keys(params)
		.map((key) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
		})
		.join('&');
}
