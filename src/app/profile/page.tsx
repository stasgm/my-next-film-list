import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
	const session = await getSession();

	if (!session?.user) {
		redirect("/");
	}

	const user = session.user;

	return (
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
	);
}
