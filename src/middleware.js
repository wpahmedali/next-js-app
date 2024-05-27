import { NextResponse } from 'next/server';

export async function middleware(request) {
  const response = await fetch(`https://api.ipify.org/?format=json`);

  console.log('first', response);

  const { ip } = await response.json();

  console.log('first', ip);

  if (ip === '154.192.179.249') {
    return new NextResponse(null, { status: 200 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
