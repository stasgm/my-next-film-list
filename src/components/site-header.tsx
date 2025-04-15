"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, BookOpen, User, LogIn, LogOut } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { useAuth } from "@/hooks/use-auth";

export function SiteHeader() {
	const { isAuthenticated, logout } = useAuth();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.push("/login");
	};

	return (
		<header className="bg-background w-full border-b">
			<div className="container mx-auto flex h-16 w-4/5 items-center">
				<div className="flex-1">
					<Link href="/" className="text-xl font-bold">
						Your Website
					</Link>
				</div>

				{isAuthenticated && (
					<nav className="hidden flex-1 justify-center space-x-4 md:flex">
						<Button variant="ghost" size="sm" asChild>
							<Link href="/" className="flex items-center gap-2">
								<Home className="h-4 w-4" />
								Home
							</Link>
						</Button>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/resources" className="flex items-center gap-2">
								<BookOpen className="h-4 w-4" />
								Resources
							</Link>
						</Button>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/profile" className="flex items-center gap-2">
								<User className="h-4 w-4" />
								Profile
							</Link>
						</Button>
					</nav>
				)}

				<div className="flex flex-1 items-center justify-end gap-4">
					{isAuthenticated ? (
						<Button variant="outline" onClick={handleLogout} className="hidden sm:inline-flex">
							<LogOut className="mr-2 h-4 w-4" />
							Logout
						</Button>
					) : (
						<Button variant="outline" asChild className="hidden sm:inline-flex">
							<Link href="/login">
								<LogIn className="mr-2 h-4 w-4" />
								Login
							</Link>
						</Button>
					)}
					<ThemeToggle />
					<MobileNav />
				</div>
			</div>
		</header>
	);
}
