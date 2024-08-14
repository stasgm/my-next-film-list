import type { Metadata } from "next";

import "@/app/globals.css";

import { Providers } from "@/app/providers";
import Footer from "@/ui/footer";
import Header from "@/ui/header";
import SectionContainer from "@/ui/section-container";

export const metadata: Metadata = {
	title: "My-next-film-list",
	description: "A list of my films",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head></head>
			<body>
				<Providers>
					<div className="flex min-h-full flex-col">
						<Header />
						<SectionContainer>{children}</SectionContainer>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
