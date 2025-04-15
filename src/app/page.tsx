"use client";

import {
	BookOpen,
	Book,
	FileText,
	Video,
	Code,
	Users,
	Lightbulb,
	MessageSquare,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const resources = [
	{
		title: "Getting Started Guide",
		description: "Learn the fundamentals and get up to speed quickly with our comprehensive guide.",
		icon: Book,
		color: "primary",
		image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
		tags: ["Beginner", "Guide", "Fundamentals"],
	},
	{
		title: "Documentation",
		description: "Detailed API references, examples, and technical specifications.",
		icon: FileText,
		color: "secondary",
		image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
		tags: ["Reference", "API", "Technical"],
	},
	{
		title: "Video Tutorials",
		description: "Step-by-step video guides covering basic to advanced topics.",
		icon: Video,
		color: "accent",
		image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069",
		tags: ["Video", "Tutorial", "Learning"],
	},
	{
		title: "Code Examples",
		description: "Real-world code samples and best practices to accelerate your development.",
		icon: Code,
		color: "highlight",
		image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
		tags: ["Examples", "Practice", "Code"],
	},
	{
		title: "Community Forum",
		description: "Connect with other developers, share knowledge, and get help.",
		icon: Users,
		color: "primary",
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
		tags: ["Community", "Support", "Discussion"],
	},
	{
		title: "Tips & Tricks",
		description: "Discover useful tips and techniques to enhance your workflow.",
		icon: Lightbulb,
		color: "secondary",
		image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=2021",
		tags: ["Tips", "Workflow", "Productivity"],
	},
	{
		title: "FAQ",
		description: "Find answers to commonly asked questions about our platform.",
		icon: MessageSquare,
		color: "accent",
		image: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=2070",
		tags: ["FAQ", "Help", "Questions"],
	},
];

export default function Home() {
	return (
		<div className="flex flex-col items-center space-y-6">
			<div className="flex items-center gap-3">
				<BookOpen className="text-primary h-8 w-8" />
				<h1 className="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
					Welcome to Your Website
				</h1>
			</div>
			<div className="w-full max-w-6xl space-y-6">
				<p className="text-muted-foreground mx-auto max-w-2xl text-center text-lg">
					Discover our comprehensive collection of resources designed to help you learn, build, and
					grow with our platform.
				</p>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{resources.map((resource, index) => {
						const Icon = resource.icon;
						return (
							<Card
								key={index}
								className="group hover:border-primary relative h-[300px] cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
							>
								{/* Background Image with Overlay */}
								<div
									className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
									style={{
										backgroundImage: `url(${resource.image})`,
									}}
								>
									<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
								</div>

								{/* Content */}
								<div className="relative flex h-full flex-col justify-between p-6 text-white">
									{/* Top Section */}
									<div className="space-y-2">
										<div className="flex items-center gap-3">
											<div className={`rounded-lg p-2 bg-${resource.color}`}>
												<Icon className="h-5 w-5" />
											</div>
											<h3 className="text-xl font-semibold">{resource.title}</h3>
										</div>
										<p className="line-clamp-2 text-sm text-gray-200">{resource.description}</p>
									</div>

									{/* Bottom Section - Tags */}
									<div className="flex flex-wrap gap-2">
										{resource.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className={`rounded-full px-2 py-1 text-xs font-medium bg-${resource.color}/20 border text-white border-${resource.color}/40`}
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}
