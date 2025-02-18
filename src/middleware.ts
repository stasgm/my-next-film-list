import type { NextRequest, MiddlewareConfig } from "next/server";

import { auth0 } from "@/lib/auth0";

export async function middleware(request: NextRequest) {
	return await auth0.middleware(request);
}

// export default withMiddlewareAuthRequired({ returnTo: "/" });

/*
 * Match all request paths except for the ones starting with:
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 */
export const config: MiddlewareConfig = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
		"/resources/",
		"/resources/:id*",
		"/profile",
	],
};
