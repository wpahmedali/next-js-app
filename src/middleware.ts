import { NextResponse, type NextRequest } from 'next/server';

const matchers = [
  '/',
  '/login',
  '/poster',
  '/not-found',
  '/print-view',
  '/verify-2fa',
  '/:country/:page',
  '/reset-password',
  '/forgot-password',
  '/demand-cars/:country',
  '/home/compare_cars/:page',
  '/validate-forgot-password',
  '/stock/location/:country/:page',
  '/used-vehicles/:country/:bodyType/:page',
  '/used-car/:country/:maker/:model/:carId',
  '/stock/yard-location/:country/:yard/:page',
  '/used-cars/:country/:maker/:model/:chassis/:page',
  '/used-vehicles/yard-location/:yard/:country/:bodyType/:page',
  '/used-cars/yard-location/:yard/:country/:maker/:model/:chassis/:page',
];

const isPathMatching = (pathname: string) => {
  return matchers.some((matcher) => {
    const regex = new RegExp(`^${matcher.replace(/:[^/]+/g, '[^/]+')}$`);
    return regex.test(pathname);
  });
};

export async function middleware(request: NextRequest) {
  const currentUserCookie = request.cookies.get('currentUser')?.value;
  const currentUser = currentUserCookie ? JSON.parse(currentUserCookie) : null;

  const verification = request.cookies.get('verification')?.value;
  const isVerification = verification ? JSON.parse(verification) : null;

  const forgotPasswordCookie = request.cookies.get('forgotPassword')?.value;
  const forgotPasswordData = forgotPasswordCookie
    ? JSON.parse(forgotPasswordCookie)
    : null;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/forgot-password')) {
    return NextResponse.next();
  }

  if (
    forgotPasswordCookie === undefined &&
    pathname.startsWith('/validate-forgot-password')
  ) {
    return NextResponse.redirect(new URL('/forgot-password', request.url));
  }

  if (
    forgotPasswordCookie !== undefined &&
    forgotPasswordData?.username &&
    !forgotPasswordData?.otp &&
    !pathname.startsWith('/validate-forgot-password')
  ) {
    return NextResponse.redirect(
      new URL('/validate-forgot-password', request.url)
    );
  }

  if (
    forgotPasswordData &&
    forgotPasswordData?.username &&
    forgotPasswordData?.otp &&
    !pathname.startsWith('/reset-password')
  ) {
    return NextResponse.redirect(new URL('/reset-password', request.url));
  }

  if (
    !currentUser &&
    isVerification?.isVerification === 1 &&
    !pathname.startsWith('/verify-2fa')
  ) {
    return NextResponse.redirect(new URL('/verify-2fa', request.url));
  }

  if (
    !currentUser &&
    !forgotPasswordData &&
    !isVerification &&
    !pathname.startsWith('/login')
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (currentUser && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isPathMatching(pathname)) {
    return NextResponse.redirect(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/poster',
    '/not-found',
    '/print-view',
    '/verify-2fa',
    '/:country/:page',
    '/reset-password',
    '/forgot-password',
    '/demand-cars/:country',
    '/home/compare_cars/:page',
    '/validate-forgot-password',
    '/stock/location/:country/:page',
    '/used-vehicles/:country/:bodyType/:page',
    '/used-car/:country/:maker/:model/:carId',
    '/stock/yard-location/:country/:yard/:page',
    '/used-cars/:country/:maker/:model/:chassis/:page',
    '/used-vehicles/yard-location/:yard/:country/:bodyType/:page',
    '/used-cars/yard-location/:yard/:country/:maker/:model/:chassis/:page',
    '/((?!api|_next/static|_next/image|.*\\.png$|assets|favicon.ico).*)',
  ],
};
