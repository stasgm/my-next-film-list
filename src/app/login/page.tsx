"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { LogIn } from "lucide-react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const { login } = useAuth();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		login();
		router.push("/");
	};

	return (
		<div className="flex min-h-[80vh] items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<div className="flex items-center gap-2">
						<LogIn className="text-primary h-6 w-6" />
						<CardTitle className="text-2xl">Login</CardTitle>
					</div>
					<CardDescription>Enter your credentials to access your account</CardDescription>
				</CardHeader>
				<form onSubmit={handleLogin}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="text-sm font-medium">
								Email
							</label>
							<Input
								id="email"
								type="email"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="password" className="text-sm font-medium">
								Password
							</label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">
							Sign In
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
