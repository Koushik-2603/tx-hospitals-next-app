// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host') || '';
  
  if (host === 'txhospitals.in') {
    const url = request.nextUrl.clone();
    url.host = 'www.txhospitals.in';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // catch-all matcher
};
