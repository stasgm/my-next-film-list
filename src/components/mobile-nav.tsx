"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, User, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export function MobileNav() {
	const { isAuthenticated, logout } = useAuth();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.push("/login");
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="flex w-[300px] flex-col sm:w-[400px]">
				<SheetTitle className="text-left">Navigation Menu</SheetTitle>
				{isAuthenticated ? (
					<nav className="mt-8 flex flex-1 flex-col space-y-4">
						<Button variant="ghost" size="lg" asChild className="justify-start">
							<Link href="/" className="flex items-center gap-2">
								<Home className="h-5 w-5" />
								Home
							</Link>
						</Button>
						<Button variant="ghost" size="lg" asChild className="justify-start">
							<Link href="/resources" className="flex items-center gap-2">
								<BookOpen className="h-5 w-5" />
								Resources
							</Link>
						</Button>
						<Button variant="ghost" size="lg" asChild className="justify-start">
							<Link href="/profile" className="flex items-center gap-2">
								<User className="h-5 w-5" />
								Profile
							</Link>
						</Button>
					</nav>
				) : (
					<div className="flex-1" />
				)}
				<SheetFooter className="mt-auto border-t pt-4">
					{isAuthenticated ? (
						<Button className="w-full" size="lg" onClick={handleLogout}>
							<LogOut className="mr-2 h-5 w-5" />
							Logout
						</Button>
					) : (
						<Button className="w-full" size="lg" asChild>
							<Link href="/login">
								<LogIn className="mr-2 h-5 w-5" />
								Login
							</Link>
						</Button>
					)}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
