import Link from "next/link";

import NavBar from "@/ui/nav/nav-bar";
import ThemeSwitch from "@/ui/theme-switch";
import SearchButton from "@/ui/search-button";
import BurgerNav from "@/ui/nav/burger-nav";
import Profile from "@/ui/profile";

export default function Header() {
	return (
		<header className="border-b border-b-gray-300 py-2 dark:border-b-gray-700">
			<div className="mx-auto flex max-w-7xl flex-row items-center px-2 sm:px-0">
				<div className="block text-xl font-bold">
					<Link href="/" aria-label={"My Film List"}>
						My Film List
					</Link>
				</div>
				<Profile />
				<div className="sm:ml-auto">
					<NavBar />
				</div>
				<div className="ml-auto flex items-center space-x-2 self-end leading-5 sm:ml-0 sm:self-auto">
					<SearchButton />
					<ThemeSwitch />
					<BurgerNav />
				</div>
			</div>
		</header>
	);
}
