import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const cookie = cookies();
	const token = cookie.get('access_token') || null;
	const protectedRoutes = ['/home', '/course/:path*'];
	const currentPath = request.nextUrl.pathname;
	if (
		protectedRoutes.some((route) =>
			currentPath.startsWith(route.replace(':path*', ''))
		) &&
		!token
	) {
		const redirectUrl = new URL('/user/login', request.url);
		return NextResponse.redirect(redirectUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/home', '/course/:path*'],
};
