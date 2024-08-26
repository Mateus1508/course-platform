import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

const tokenInfoUrl = 'https://www.googleapis.com/oauth2/v3/tokeninfo';

export async function middleware(request: NextRequest) {
	const cookie = cookies();
	const token = cookie.get('access_token')?.value || null;

	const protectedRoutes = ['/home', '/course/:path*'];
	const redirectUrl = new URL('/user/login', request.url);
	const currentPath = request.nextUrl.pathname;

	if (
		protectedRoutes.some((route) =>
			currentPath.startsWith(route.replace(':path*', ''))
		) &&
		!token
	) {
		return NextResponse.redirect(redirectUrl);
	}

	if (token) {
		try {
			const response = await axios.get(tokenInfoUrl, {
				params: { access_token: token },
			});

			if (response.status === 200 && response.data && response.data.aud) {
				// Token é válido
				return NextResponse.next();
			} else {
				cookie.delete('access_token');
				return NextResponse.redirect(redirectUrl);
			}
		} catch (error) {
			console.error('Error in token validation:', error);
			cookie.delete('access_token');
			return NextResponse.redirect(redirectUrl);
		}
	} else {
		return NextResponse.redirect(redirectUrl);
	}
}

export const config = {
	matcher: ['/home', '/course/:path*'],
};
