import { NextResponse } from 'next/server';

export async function middleware(request) {
  const response = await fetch(`https://api.ipify.org/?format=json`);
  const { ip } = await response.json();

  if (ip === '154.192.179.249') {
    return new NextResponse(null, { status: 200 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
