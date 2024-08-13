"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<UserProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="light" // use system theme
				enableSystem
			>
				{children}
			</ThemeProvider>
		</UserProvider>
	);
}
