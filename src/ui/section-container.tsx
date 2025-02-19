import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

export default function SectionContainer({ children, className }: Props) {
	return (
		<div className="bg-neutral-100 px-2 sm:px-0 dark:bg-neutral-900">
			<div className={className}>{children}</div>
		</div>
	);
}
