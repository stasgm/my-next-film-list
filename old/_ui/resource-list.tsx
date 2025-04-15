import prisma from "@/lib/prisma";
import { DataTable } from "@/ui/table/data-table";
import { fullColumns } from "@/ui/table/columns";
import { shortColumns } from "@/ui/table/columns-short";

async function fetchResources() {
	try {
		const resources = await prisma.resource.findMany();
		return resources;
	} catch {
		return [];
	}
}

type Props = {
	favourite?: boolean;
};

export default async function ResourceList(props: Props) {
	const resources = await fetchResources();

	const filteredResources = !props.favourite
		? resources
		: resources.filter((resource) => resource.favourite === props.favourite);

	const columns = !props.favourite ? fullColumns : shortColumns;

	return (
		<>
			<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
				{`Resources found: ${filteredResources.length}`}
			</span>
			<div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
				<DataTable columns={columns} data={filteredResources} />
			</div>
		</>
	);
}
