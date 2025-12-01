// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('✅ Middleware is working for:', request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // catch-all matcher
};
