import { ComponentProps } from "react";
import Image from "next/image";
import { PosterSize, tmdbImage } from "@/lib/tmdb/utils";

import { cn } from "@/lib/utils";

interface MediaPosterProps extends ComponentProps<"div"> {
	image?: string | null;
	width?: number;
	height?: number;
	size?: PosterSize;
	alt: string;
	priority?: boolean;
}

export const MediaPoster: React.FC<MediaPosterProps> = ({
	image,
	size = "w500",
	width = 300,
	height = 200,
	alt,
	className,
	priority = true,
	...props
}) => {
	const src = image ? tmdbImage.poster(image, size) : null;

	if (!src) {
		return (
			<div
				className={cn(
					"bg-muted text-muted-foreground h-48 w-48 max-w-full rounded-md border",
					className,
				)}
				{...props}
			>
				<div className="grid size-full place-items-center">No poster</div>
			</div>
		);
	}

	return (
		<Image
			className={cn("bg-muted rounded-md border object-cover", className)}
			src={src}
			alt={alt}
			priority={priority}
			width={width}
			height={height}
			unoptimized
		/>
	);
};
