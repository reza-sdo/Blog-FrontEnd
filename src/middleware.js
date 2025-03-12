import { NextResponse } from 'next/server';
import { middlewareAuth } from './auth/middlewareAuth';

export const middleware = async (request) => {
  const url = request.url;
  const path = request.nextUrl.pathname;

  if (path.startsWith('/signin') || path.startsWith('/signup')) {
    const user = await middlewareAuth(request);
    if (user) {
      return NextResponse.redirect(new URL(`/`, request.nextUrl));
    }
  }
  if (path.startsWith('/profile')) {
    const user = await middlewareAuth(request);
    if (!user) {
      return NextResponse.redirect(new URL(`/signin`, request.nextUrl));
    }
  }
};
export const config = {
  matcher: ['/profile/:path*', '/signin', '/signup'],
};
