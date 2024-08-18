// "use client";
import { getSession } from '@auth0/nextjs-auth0';

// import { useUser } from "@auth0/nextjs-auth0/client";

import FilmList from "@/ui/films";

export default async function Home() {
	// const { user } = useUser();
	const user = (await getSession())?.user;


	return (
		<section>
			{user && <FilmList />}
			{!user && (
				<div className="flex h-10 items-center justify-center">
					<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
						Log in to see your films list
					</span>
				</div>
			)}
		</section>
	);
}
