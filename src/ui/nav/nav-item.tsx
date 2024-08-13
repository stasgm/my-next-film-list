import Link from "next/link";

import { cn } from "@/lib/utils";

export default function NavItem({
	link,
	currentPath,
}: {
	link: { path: string; text: string };
	currentPath?: string;
}) {
	return (
		<Link
			key={link.path}
			className={cn(
				"rounded-lg px-4 py-2 text-sm font-medium",
				"hover:text-primary-500 dark:hover:text-primary-400",
				"hover:bg-slate-200 dark:hover:bg-slate-800",
				`${currentPath === link.path ? "bg-slate-100 dark:bg-slate-900" : ""}`,
			)}
			href={link.path}
		>
			{link.text}
		</Link>
	);
}
