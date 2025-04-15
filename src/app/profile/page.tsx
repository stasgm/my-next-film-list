"use client";

import { User } from "lucide-react";

export default function Profile() {
	return (
		<div className="flex flex-col items-center space-y-6">
			<div className="flex items-center gap-3">
				<User className="h-8 w-8" />
				<h1 className="text-4xl font-bold">Profile</h1>
			</div>
			<div className="w-full max-w-3xl space-y-6">
				<p className="text-muted-foreground text-center text-lg">
					Manage your profile settings and preferences.
				</p>
				<div className="rounded-lg border p-6">
					<div className="space-y-4">
						<div className="flex items-center justify-center">
							<div className="bg-muted flex h-24 w-24 items-center justify-center rounded-full">
								<User className="text-muted-foreground h-12 w-12" />
							</div>
						</div>
						<div className="text-center">
							<h2 className="text-xl font-semibold">User Name</h2>
							<p className="text-muted-foreground">user@example.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
