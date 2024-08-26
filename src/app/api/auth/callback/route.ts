import { NextResponse } from 'next/server';
import client from '../../../../../client_secret.json';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get('code');

	if (!code) {
		return NextResponse.redirect(
			'http://localhost:3000/login?error=missing_code'
		);
	}

	const params = new URLSearchParams({
		code: code!,
		client_id: client.web.client_id,
		client_secret: client.web.client_secret,
		redirect_uri: client.web.redirect_uris[0],
		grant_type: 'authorization_code',
	});

	try {
		const response = await axios.post(
			client.web.token_uri,
			params.toString(),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);

		const data = response.data;

		if (data.error) {
			console.error('Error in token response:', data.error);
			return NextResponse.redirect(
				'http://localhost:3000/login?error=' + data.error
			);
		}

		if (!data.access_token) {
			console.error('No access token in response:', data);
			return NextResponse.redirect(
				'http://localhost:3000/login?error=no_access_token'
			);
		}

		const cookie = cookies();
		cookie.set('access_token', data.access_token, {
			maxAge: 3600,
			path: '/',
			secure: process.env.NODE_ENV === 'production',
		});

		return NextResponse.redirect('http://localhost:3000/home');
	} catch (error: any) {
		console.error(
			'Error fetching access token:',
			error.response?.data || error.message || error
		);
		return NextResponse.redirect(
			'http://localhost:3000/login?error=server_error'
		);
	}
}
