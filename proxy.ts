import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const country = request.geo?.country

  if (country === 'RU') {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://romanshtor-site.vercel.app/')
    return NextResponse.redirect(url, 302)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
