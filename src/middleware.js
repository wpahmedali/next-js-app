import { NextResponse } from 'next/server';

export async function middleware(request) {
  const ip = request.headers.get('x-forwarded-for') || request.ip;

  // if (ip === '39.61.41.233') {
  return new NextResponse(ip, { status: 200 });
  // }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
