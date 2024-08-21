import { cn } from "@/lib/utils";
import { ReactElement, SVGProps } from "react";

type ActionButtonProps = SVGProps<SVGSVGElement> & { children: ReactElement; active?: boolean };

const ActionButton = ({ children, active, ...htmlAttributes }: ActionButtonProps): JSX.Element => (
	<svg
		className={cn(
			"h-8 w-8 cursor-pointer rounded-full stroke-current stroke-2 p-1 hover:text-green-600",
			`${active ? "bg-green-300" : "hover:bg-gray-100"}`,
		)}
		fill="none"
		viewBox="0 0 24 24"
		{...htmlAttributes}
	>
		{children}
	</svg>
);

export default ActionButton;
