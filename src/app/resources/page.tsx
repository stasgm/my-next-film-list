import prisma from "@/lib/prisma";

async function fetchResources() {
	const resources = await prisma.resource.findMany();
	return resources;
}

export default async function ResourcesPage() {
	const resources = await fetchResources();

	return (
		<div>
			<h1>Resources:</h1>
			<ul>
				{resources.map((resource) => (
					<li key={resource.id}>{resource.title}</li>
				))}
			</ul>
		</div>
	);
}
