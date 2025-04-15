"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, StarHalf, ArrowLeft, ExternalLink } from "lucide-react";

const resources = [
	{
		id: 1,
		name: "React Documentation",
		url: "https://react.dev",
		rate: 5,
		type: "Documentation",
		description:
			"Official React documentation with comprehensive guides, API references, and interactive examples. Perfect for both beginners and experienced developers looking to master React.",
		features: [
			"Interactive tutorials",
			"Comprehensive API reference",
			"Best practices and patterns",
			"Performance optimization guides",
		],
	},
	{
		id: 2,
		name: "Next.js Learn Course",
		url: "https://nextjs.org/learn",
		rate: 4.5,
		type: "Tutorial",
		description:
			"Step-by-step course to learn Next.js features and build production-ready applications. Covers routing, data fetching, optimization, and deployment.",
		features: [
			"Hands-on exercises",
			"Real-world examples",
			"Performance optimization",
			"Deployment strategies",
		],
	},
	{
		id: 3,
		name: "TypeScript Handbook",
		url: "https://www.typescriptlang.org/docs/",
		rate: 5,
		type: "Documentation",
		description:
			"Complete guide to TypeScript features, type system, and tooling. Essential resource for writing type-safe JavaScript applications.",
		features: [
			"Type system guide",
			"Configuration options",
			"Migration strategies",
			"Advanced types",
		],
	},
	{
		id: 4,
		name: "Tailwind CSS Course",
		url: "https://tailwindcss.com/learn",
		rate: 4.5,
		type: "Tutorial",
		description:
			"Learn utility-first CSS framework through practical examples. Master responsive design, customization, and optimization techniques.",
		features: [
			"Utility-first concepts",
			"Component patterns",
			"Responsive design",
			"Custom configuration",
		],
	},
	{
		id: 5,
		name: "JavaScript.info",
		url: "https://javascript.info",
		rate: 5,
		type: "Reference",
		description:
			"Modern JavaScript tutorial covering fundamentals to advanced topics. Includes practical examples and exercises for hands-on learning.",
		features: [
			"Modern JavaScript features",
			"Browser APIs",
			"Async programming",
			"Data structures",
		],
	},
];

function RatingStars({ rating }: { rating: number }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className="text-highlight flex items-center gap-0.5">
			{[...Array(fullStars)].map((_, i) => (
				<Star key={i} className="h-5 w-5 fill-current" />
			))}
			{hasHalfStar && <StarHalf className="h-5 w-5 fill-current" />}
		</div>
	);
}

export default function ResourceDetails() {
	const params = useParams();
	const resource = resources.find((r) => r.id === Number(params.id));

	if (!resource) {
		return (
			<div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
				<h1 className="text-2xl font-bold">Resource not found</h1>
				<Button asChild>
					<Link href="/resources">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Resources
					</Link>
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" asChild>
					<Link href="/resources">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Resources
					</Link>
				</Button>
			</div>

			<Card className="space-y-6 p-6">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-bold">{resource.name}</h1>
						<Button asChild>
							<a href={resource.url} target="_blank" rel="noopener noreferrer">
								Visit Resource
								<ExternalLink className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<RatingStars rating={resource.rate} />
						<span className="bg-secondary/10 text-secondary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
							{resource.type}
						</span>
					</div>
				</div>

				<div className="space-y-4">
					<div>
						<h2 className="mb-2 text-xl font-semibold">Description</h2>
						<p className="text-muted-foreground">{resource.description}</p>
					</div>

					<div>
						<h2 className="mb-2 text-xl font-semibold">Key Features</h2>
						<ul className="list-inside list-disc space-y-2">
							{resource.features.map((feature, index) => (
								<li key={index} className="text-muted-foreground">
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</Card>
		</div>
	);
}
