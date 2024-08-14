import Link from "next/link";

import NavBar from "@/ui/nav/nav-bar";
import ThemeSwitch from "@/ui/theme-switch";
import SearchButton from "@/ui/search-button";
import BurgerNav from "@/ui/nav/burger-nav";
import Profile from "@/ui/profile";

export default function Header() {
	return (
		<header className="py-2 border-b-gray-300 dark:border-b-gray-700 border-b">
			<div className="mx-auto flex max-w-7xl flex-col items-start sm:flex-row sm:flex-wrap sm:items-center md:flex-nowrap">
				<div className="-mt-0.5 hidden h-6 whitespace-nowrap text-xl font-bold sm:block">
					<Link href="/" aria-label={"My Film List"}>
						My Film List
					</Link>
				</div>
				<Profile />
				<div className="sm:ml-auto">
					<NavBar />
				</div>
				<div className="flex items-center space-x-2 self-end leading-5 sm:self-auto">
					<SearchButton />
					<ThemeSwitch />
					<BurgerNav />
				</div>
			</div>
		</header>
	);
}
