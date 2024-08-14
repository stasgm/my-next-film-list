"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";

import NavItem from "@/ui/nav/nav-item";
import { privatLinks, publicLinks } from "@/data/navigation";

export default function NavBar() {
	const pathname = usePathname();
	const { user } = useUser();

	return (
		<div className="flex items-center">
			<nav className="no-scrollbar hidden max-w-40 items-center space-x-2 overflow-x-auto sm:flex sm:space-x-2 md:max-w-72 lg:max-w-96">
				{(!user ? publicLinks : privatLinks).map((link) => (
					<NavItem link={link} currentPath={pathname} key={`nav-${link.text || "home"}`} />
				))}
			</nav>
		</div>
	);
}
