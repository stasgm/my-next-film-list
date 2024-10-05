import FavouriteList from "@/ui/favorite-list";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
	const { user } = (await getSession()) ?? {};

	return (
		<section>
			<div className="items-center justify-center">
				{user && <FavouriteList />}
				{!user && (
					<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
						Log in to see your films list
					</span>
				)}
			</div>
		</section>
	);
}
