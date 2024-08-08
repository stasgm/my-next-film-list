import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Nav } from "@/ui/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My-next-film-list",
	description: "A list of myfilms",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
