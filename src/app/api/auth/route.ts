import { NextResponse } from 'next/server';
import client from '../../../../client_secret.json';

export async function GET() {
	const authorizationUrl = new URL(
		'https://accounts.google.com/o/oauth2/auth'
	);
	const params = new URLSearchParams({
		client_id: client.web.client_id,
		redirect_uri: client.web.redirect_uris[0],
		response_type: 'code',
		scope: 'https://www.googleapis.com/auth/youtube.readonly',
		access_type: 'offline',
		prompt: 'consent',
	});

	authorizationUrl.search = params.toString();

	return NextResponse.redirect(authorizationUrl.toString());
}
