"use client";

import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<div className="flex flex-row space-x-2">
				<Image
					src={user.picture ? user.picture : ""}
					alt={user.name ?? "no-name"}
					width={70}
					height={70}
				/>
				<ul>
					<li>Name: {user.name}</li>
					<li>E-mail: {user.email}</li>
				</ul>
			</div>
		)
	);
}
