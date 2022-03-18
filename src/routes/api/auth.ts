import { serialize } from 'cookie';

export async function post() {
	let data = {
		username: 'testuser',
		email: 'testemail@email.com',
		role: 'Admin'
	};

	return {
		status: 200,
		headers: {
			'Set-Cookie': serialize('auth', JSON.stringify(data), {
				path: '/',
				maxAge: 60 * 60 * 24 * 7,
				httpOnly: true
			})
		},
		body: {
			data
		}
	};
}

export async function get() {
	return {
		body: 'Hello, World!'
	};
}
