"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Star, StarHalf } from "lucide-react";
import Link from "next/link";

const resources = [
	{
		id: 1,
		name: "React Documentation",
		url: "https://react.dev",
		rate: 5,
		type: "Documentation",
	},
	{
		id: 2,
		name: "Next.js Learn Course",
		url: "https://nextjs.org/learn",
		rate: 4.5,
		type: "Tutorial",
	},
	{
		id: 3,
		name: "TypeScript Handbook",
		url: "https://www.typescriptlang.org/docs/",
		rate: 5,
		type: "Documentation",
	},
	{
		id: 4,
		name: "Tailwind CSS Course",
		url: "https://tailwindcss.com/learn",
		rate: 4.5,
		type: "Tutorial",
	},
	{
		id: 5,
		name: "JavaScript.info",
		url: "https://javascript.info",
		rate: 5,
		type: "Reference",
	},
];

function RatingStars({ rating }: { rating: number }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className="text-highlight flex items-center gap-0.5">
			{[...Array(fullStars)].map((_, i) => (
				<Star key={i} className="h-4 w-4 fill-current" />
			))}
			{hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
		</div>
	);
}

export default function Resources() {
	return (
		<div className="flex flex-col space-y-6">
			<div className="flex items-center gap-3">
				<h1 className="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
					Learning Resources
				</h1>
			</div>
			<div className="bg-card rounded-lg border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-16">#</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>URL</TableHead>
							<TableHead>Rating</TableHead>
							<TableHead>Type</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{resources.map((resource) => (
							<TableRow key={resource.id}>
								<TableCell className="font-medium">{resource.id}</TableCell>
								<TableCell>
									<Link href={`/resources/${resource.id}`} className="text-primary hover:underline">
										{resource.name}
									</Link>
								</TableCell>
								<TableCell>
									<a
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										{resource.url}
									</a>
								</TableCell>
								<TableCell>
									<RatingStars rating={resource.rate} />
								</TableCell>
								<TableCell>
									<span className="bg-secondary/10 text-secondary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
										{resource.type}
									</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
