import { Card, CardHeader } from "@/ui/card";
import { MediaPoster } from "@/ui/media-poster";

interface Props {
	title: string;
	description: string;
	generes: string[];
	backdropUrl?: string | null;
}

export default function ResourceCard({ title, description, generes = [], backdropUrl }: Props) {
	return (
		<Card>
			<CardHeader className="p-4">
				{/* <CardTitle>{title}</CardTitle> */}
				<div className="relative text-center">
					<MediaPoster
						className="h-48 w-96 object-cover"
						alt={title}
						image={backdropUrl}
						size={"w342"}
					/>
					<div className="absolute inset-0 rounded-md bg-gray-700 opacity-50 transition-opacity group-hover:opacity-0"></div>
					<div className="absolute inset-0 flex items-start justify-start p-2">
						<span className="text-xs text-muted-foreground text-white">{generes.join(", ")}</span>
					</div>
					<div className="absolute inset-0 flex items-end justify-start p-2">
						<span className="text-3xl font-bold text-white">{title}</span>
					</div>
				</div>
			</CardHeader>
			{/* <CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<p>{footer}</p>
			</CardFooter> */}
		</Card>
	);
}
