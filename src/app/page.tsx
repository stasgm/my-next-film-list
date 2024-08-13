"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import FilmList from "@/ui/films";

export default function Home() {
	const { user } = useUser();

	return (
		<section>
			{user && <FilmList />}
			{!user && (
				<div className="fixed inset-0 flex w-screen items-center justify-center bg-white text-gray-600 text-opacity-75">
					<p>Log in to see your films list</p>
				</div>
			)}
		</section>
	);
}
