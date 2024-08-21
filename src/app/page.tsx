import { getSession } from "@auth0/nextjs-auth0";

import Resourcelist from "@/ui/resource-list";

export default async function Home() {
	const { user } = (await getSession()) ?? {};

	return (
		<section>
			{user && <Resourcelist favourite={true} />}
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
