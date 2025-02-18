import FavouriteList from "@/ui/favorite-list";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
	const session = await auth0.getSession();

	return (
		<section>
			<div className="items-center justify-center">
				{!session ? (
					<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
						Log in to see your films list
					</span>
				) : <FavouriteList />}
			</div>
		</section>
	);
}
