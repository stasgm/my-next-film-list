import Image from "next/image";
import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";

export default async function Profile() {
	const session = await auth0.getSession();

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
				priority={true}
			/>
			<ul>
				<li>Name: {user.name}</li>
				<li>E-mail: {user.email}</li>
			</ul>
		</div>
	);
}
