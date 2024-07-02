import { NextResponse } from 'next/server';

export async function middleware(request) {
  const ip = request.headers.get('x-forwarded-for') || request.ip;

  if (ip === '102.129.186.255') {
    return new NextResponse(null, { status: 200 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
