import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url)
  const pathname = url.pathname;
  
  // Assuming your JWT is named 'jwttoken'
  const token = request.cookies.get('jwttoken'); 

  const publicPath = pathname === '/admin';
  const pPath=pathname==='/register' || pathname==='/login';

   if(pPath && token ){
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  if (publicPath && !token) {
    return NextResponse.redirect(new URL('/register', request.url));
  }
 
}

// Config remains the same
export const config = {
  matcher: ['/admin','/register','/login']
};
