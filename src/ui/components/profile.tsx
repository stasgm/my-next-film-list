"use client";

import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div />;
	if (error) return <div />;

	return (
		user && (
			<div className="hidden flex-row items-center space-x-2 pl-2 text-sm sm:flex">
				<Image
					className="rounded-full"
					src={user.picture ? user.picture : ""}
					alt={user.name ?? "no-name"}
					width={30}
					height={30}
				/>
				<span className="font-bold">{user.name}</span>
				<span>({user.email})</span>
			</div>
		)
	);
}
