import { cn } from "@/lib/utils";

type Column = {
	title: string;
	key: string | number;
	headClassName?: string;
	render?: (value: any, row: any, index: number) => JSX.Element | string;
};

type dataRow = {
	[field: string]: any;
};

type Props = {
	columns: Column[];
	dataRows: dataRow[];
	rowKey?: string;
	selected?: string;
};

export default function Table({ columns, dataRows, rowKey = "key", selected }: Props) {
	return (
		<table className="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
			<thead className="bg-gray-200 dark:bg-gray-900">
				<tr>
					{columns.map((col) => (
						<th
							key={col.key}
							className={cn(
								"px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300",
								`${col.headClassName ?? ""}`,
							)}
							scope="col"
						>
							{col.title}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{dataRows.map((row) => (
					<tr
						key={row[rowKey]}
						className={cn(
							'border-b even:bg-gray-50 hover:bg-gray-100 even:dark:bg-gray-800/50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800'
						)}
					>
						{columns.map((col, index) => (
							<td
								key={col.key}
								className={cn('py-2 text-sm text-gray-500 dark:text-gray-300 px-4', `${col.headClassName ?? ''}`)}
							>
								{col.render?.(row[col.key], row, index) ?? row[col.key]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
