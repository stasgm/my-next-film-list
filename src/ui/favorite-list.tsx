import prisma from "@/lib/prisma";

import ResourceCard from "@/ui/resource-card";

async function fetchResources() {
	try {
		const resources = await prisma.resource.findMany({ where: { favourite: true } });
		return resources;
	} catch {
		return [];
	}
}

export default async function FavouriteList() {
	const resources = await fetchResources();

	// Use for data filtering
	const filteredResources = resources.filter((resource) => resource.favourite === true);

	return (
		<>
			<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
				{`Resources found: ${filteredResources.length}`}
			</span>
			<div className="card-grid grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
				{filteredResources.map((el) => (
					<ResourceCard
						key={el.id}
						description="description"
						generes={el.genres}
						backdropUrl={el.backdropUrl}
						title={el.title}
					/>
				))}
			</div>
		</>
	);
}
