import Link from "next/link";

import NavBar from "@/ui/nav/nav-bar";
import ThemeSwitch from "@/ui/theme-switch";
import SearchButton from "@/ui/search-button";
import BurgerNav from "@/ui/nav/burger-nav";
import Profile from "@/ui/profile";

export default function Header() {
	return (
		<header className="py-2 border-b-gray-300 dark:border-b-gray-700 border-b">
			<div className="flex flex-row mx-auto max-w-7xl items-center px-2 sm:px-0">
				<div className="text-xl font-bold block">
					<Link href="/" aria-label={"My Film List"}>
						My Film List
					</Link>
				</div>
				<Profile />
				<div className="sm:ml-auto">
					<NavBar />
				</div>
				<div className="flex items-center ml-auto sm:ml-0 space-x-2 self-end leading-5 sm:self-auto">
					<SearchButton />
					<ThemeSwitch />
					<BurgerNav />
				</div>
			</div>
		</header>
	);
}
