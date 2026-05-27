import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/tools/AgentsFlow') {
    const url = request.nextUrl.clone()
    url.pathname = '/tools/agentsflow'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/tools/AgentsFlow'],
}
