import Link from "next/link";

import NavBar from "@/ui/nav/nav-bar";
import ThemeSwitch from "@/ui/components/theme-switch";
import SearchButton from "@/ui/components/search-button";
import BurgerNav from "@/ui/nav/burger-nav";
import Profile from "@/ui/components/profile";

export default function Header() {
	return (
		<header className="border-b py-2 sm:py-2">
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
