import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
	return (
		<div className="bg-neutral-100 px-2 dark:bg-neutral-900 sm:px-0">
			<main className="mx-auto flex w-full max-w-7xl flex-col py-1 pb-4 sm:py-4">{children}</main>
		</div>
	);
}
