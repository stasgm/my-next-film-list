import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { MiddlewareConfig } from "next/server";

export default withMiddlewareAuthRequired({ returnTo: "/" });

export const config: MiddlewareConfig = {
	matcher: ["/resources/", "/resources/:id*", "/profile"],
};
